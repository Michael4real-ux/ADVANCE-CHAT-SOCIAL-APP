import {
  Column,
  Table,
  DataType,
  Model,
  PrimaryKey,
  Default,
  BelongsToMany,
} from 'sequelize-typescript';
import { ParticipantConversations } from './ParticipantConversations';
import { Participant } from './Participant';

@Table
export class Conversation extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsToMany(() => Participant, () => ParticipantConversations)
  participants: Participant[];
}
