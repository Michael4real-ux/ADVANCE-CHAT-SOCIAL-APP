import {
  // BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserDetails, FindUserParams } from 'src/utils/types';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/utils/sequelize';
import { hashPassword } from 'src/utils/helpers';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private sequelize: Sequelize,
  ) {}
  async createUser(userDetails: CreateUserDetails): Promise<any> {
    await this.checkUserExistenceByEmail(userDetails.email);
    await this.checkUserExistenceByUsername(userDetails.username);

    const dbTransaction = await this.sequelize.transaction();

    const password = await hashPassword(userDetails.password);
    const newUser = await this.userRepository.create({
      ...userDetails,
      password,
    });

    await dbTransaction.commit();
    return {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      username: newUser.username,
    };
  }

  /**
   * @Function : findUser
   * @Tables_Affected : users
   * @Purpose : Finds the user in table either by id or email
   */
  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOne({
      where: { email: findUserParams.email },
    });
  }

  async checkUserExistenceByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      // throw new BadRequestException('email already in use');
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    }
  }

  async checkUserExistenceByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      // throw new BadRequestException('email already in use');
      throw new HttpException('Username already exist', HttpStatus.CONFLICT);
    }
  }
}
