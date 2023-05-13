import { User } from './sequelize/models/User';

export type CreateUserDetails = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ValidateUserDetails = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;
export type CreateConversationParams = {
  recipientId: number;
  message: string;
};
export interface AuthenticatedRequest extends Request {
  user: User;
}
export type FindParticipantParams = Partial<{
  id: number;
}>;
export type CreateParticipantParams = {
  id: number;
};
export type CreateMessageParams = {
  content: string;
  conversationId: number;
  user: User;
};
