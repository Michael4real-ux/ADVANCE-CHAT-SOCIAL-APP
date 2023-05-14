import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { ValidateUserDetails } from 'src/utils/types';
// import { User } from 'src/utils/sequelize';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/users/user';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}
  async validateUser(userCredentials: ValidateUserDetails): Promise<any> {
    const user = await this.userService.findUserByEmailRelation({
      email: userCredentials.email,
    });
    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

    const isPasswordValid = compareHash(
      userCredentials.password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }
}
