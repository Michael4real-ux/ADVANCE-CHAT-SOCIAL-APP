import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
import { Services } from 'src/utils/constants';
import { SequelizeModule } from '@nestjs/sequelize';
import { Participant, User } from 'src/utils/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User, Participant])],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  // controllers: [UsersController],
})
export class UsersModule {}
