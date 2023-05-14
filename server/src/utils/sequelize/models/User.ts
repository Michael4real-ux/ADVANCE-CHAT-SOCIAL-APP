import {
  Column,
  Table,
  DataType,
  Model,
  PrimaryKey,
  Default,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Participant } from './Participant';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column({ type: DataType.STRING, unique: true })
  username: string | null;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @ForeignKey(() => Participant)
  @Column({ type: DataType.UUID, unique: true })
  ParticipantId: string;

  @BelongsTo(() => Participant)
  participant: Participant;

  // @ForeignKey(() => Participant)
  // @Column({ type: DataType.UUID, unique: true })
  // participantId: string;

  // @HasOne(() => Participant)
  // participant: Participant;
}
