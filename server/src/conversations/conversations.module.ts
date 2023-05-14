import { Module } from '@nestjs/common';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { Services } from 'src/utils/constants';
import { SequelizeModule } from '@nestjs/sequelize';
import { Participant, Conversation } from '../utils/sequelize';
import { UsersModule } from 'src/users/users.module';
import { ParticipantsModule } from 'src/participants/participants.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Conversation, Participant]),
    ParticipantsModule,
    UsersModule,
  ],
  controllers: [ConversationsController],
  providers: [
    {
      provide: Services.CONVERSATIONS,
      useClass: ConversationsService,
    },
  ],
})
export class ConversationsModule {}
