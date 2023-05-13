import { User } from 'src/utils/sequelize';
import { ValidateUserDetails } from '../utils/types';
export interface IAuthService {
  validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
}
