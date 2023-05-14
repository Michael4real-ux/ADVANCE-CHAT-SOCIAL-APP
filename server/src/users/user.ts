import { User } from 'src/utils/sequelize';
import { CreateUserDetails, FindUserParams } from 'src/utils/types';

export interface IUserService {
  createUser(userDetails: CreateUserDetails): Promise<any>;
  findUserByEmailRelation(findUserParams: FindUserParams): Promise<any>;
  saveUser(user: User): Promise<any>;
  findUserByIdRelation(findUserParams: FindUserParams): Promise<any>;
}
