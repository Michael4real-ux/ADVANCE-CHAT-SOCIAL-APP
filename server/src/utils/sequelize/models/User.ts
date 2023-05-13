import {
  Column,
  Table,
  DataType,
  Model,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';

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

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  //   @BeforeSave
  //   static async hashPassword(user: User) {
  //     if (user.changed('password')) {
  //       const hashedPassword = await argon2.hash(user.password);
  //       user.password = hashedPassword;
  //     }
  //   }
}
