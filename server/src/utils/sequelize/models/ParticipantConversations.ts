import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Conversation } from './Conversation';
import { Participant } from './Participant';

@Table
export class ParticipantConversations extends Model {
  @ForeignKey(() => Conversation)
  @Column
  conversationId: string;

  @BelongsTo(() => Conversation)
  Conversation: Conversation;

  @ForeignKey(() => Participant)
  @Column
  ParticipantId: string;

  @BelongsTo(() => Participant)
  Participant: Participant;
}
