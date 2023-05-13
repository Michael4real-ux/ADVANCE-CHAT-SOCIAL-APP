// import {
//   Column,
//   Table,
//   DataType,
//   Model,
//   PrimaryKey,
//   Default,
//   Index,
// } from 'sequelize-typescript';
// import * as session from 'express-session';
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// import { Sequelize } from 'sequelize';

// const POSTGRES_HOST = process.env.POSTGRES_HOST as string;
// const POSTGRES_PORT = process.env.POSTGRES_PORT as any;
// const POSTGRES_USER = process.env.POSTGRES_USER as string;
// const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;
// const POSTGRES_DB = process.env.POSTGRES_DB as string;

// const db = new Sequelize({
//   dialect: 'postgres',
//   host: POSTGRES_HOST,
//   port: POSTGRES_PORT,
//   username: POSTGRES_USER,
//   password: POSTGRES_PASSWORD,
//   database: POSTGRES_DB,
// });

// @Table
// export class Session extends Model {
//   @PrimaryKey
//   @Default(DataType.STRING)
//   @Column(DataType.STRING)
//   id: string;

//   @Index('expiredAt')
//   @Column({ type: DataType.BIGINT })
//   expiredAt: number = Date.now();

//   @Column({ type: DataType.DATE })
//   destroyedAt?: Date;

//   @Column({ type: DataType.TEXT })
//   json: string;
// }

// export const extendDefaultFields = (defaults: any, session: any) => {
//   return {
//     expiredAt: defaults.expiredAt,
//     destroyedAt: defaults.destroyedAt,
//     json: defaults.json,
//     id: session.id,
//   };
// };

// export const store = new SequelizeStore({
//   db: db,
//   table: 'Session',
//   extendDefaultFields: extendDefaultFields,
// });
