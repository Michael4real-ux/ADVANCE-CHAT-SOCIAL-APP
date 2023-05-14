import { Module } from '@nestjs/common';
import { ParticipantConversationsService } from './participant-conversations.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ParticipantConversations } from 'src/utils/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ParticipantConversations])],
  providers: [ParticipantConversationsService],
})
export class ParticipantConversationsModule {}
