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
import { Conversation } from './Conversation';

@Table
export class Participant extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  //   @HasOne(() => User)
  //   user: User;

  //   @ForeignKey(() => User)
  //   @Column({ type: DataType.UUID, unique: true })
  //   UserId: string;

  // @ForeignKey(() => User)
  // @Column({ type: DataType.UUID, unique: true })
  // UserId: string;

  // @BelongsTo(() => User)
  // user: User;

  @BelongsToMany(() => Conversation, () => ParticipantConversations)
  participants: Conversation[];
}
