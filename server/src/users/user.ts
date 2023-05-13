import { CreateUserDetails, FindUserParams } from 'src/utils/types';

export interface IUserService {
  createUser(userDetails: CreateUserDetails): Promise<any>;
  findUser(findUserParams: FindUserParams): Promise<any>;
}
