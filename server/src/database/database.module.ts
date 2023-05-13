import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import models from 'src/utils/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        autoLoadModels: true,
        synchronize: true,
        models: models,
        define: {
          timestamps: true,
        },
        logging: false,
        pool: {
          max: 20,
          min: 0,
          idle: 10000, // max time in ms that a connection can be idle before being released
          acquire: 60000, // max time in ms that Pool will try to get connection before throwing error
          evict: 1000, // max time in ms after which sequelize will remove idle connections
        }, // todo: add to config
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
