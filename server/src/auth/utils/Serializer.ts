import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/utils/sequelize';
import { IUserService } from 'src/users/user';
import { Services } from '../../utils/constants';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {
    super();
  }

  serializeUser(user: User, done: (...args: any[]) => any) {
    done(null, user);
  }

  async deserializeUser(user: User, done: (...args: any[]) => any) {
    const userDb = await this.userService.findUser({ email: user.email });
    return userDb ? done(null, userDb) : done(null, null);
  }
}
