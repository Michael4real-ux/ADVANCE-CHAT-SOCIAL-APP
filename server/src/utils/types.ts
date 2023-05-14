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
  id: string;
  email: string;
}>;

export type CreateConversationParams = {
  authorId: string;
  recipientId: string;
  message: string;
};
export interface AuthenticatedRequest extends Request {
  user: User;
}
export type FindParticipantParams = Partial<{
  id: string;
}>;
export type CreateParticipantParams = {
  id: string;
};
export type CreateMessageParams = {
  content: string;
  conversationId: string;
  user: User;
};
