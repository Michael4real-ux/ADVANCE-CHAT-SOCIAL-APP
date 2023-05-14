import { User } from 'src/utils/sequelize';
import { CreateConversationParams } from '../utils/types';

export interface IConversationsService {
  createConversation(user: User, conversationParams: CreateConversationParams);
}
