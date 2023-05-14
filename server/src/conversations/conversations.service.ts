import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { IParticipantsService } from '../participants/participants';
import { IUserService } from '../users/user';
import { Services } from '../utils/constants';
import { Conversation, Participant, User } from '../utils/sequelize';
import { CreateConversationParams } from '../utils/types';
import { IConversationsService } from './conversations';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ConversationsService implements IConversationsService {
  constructor(
    @InjectModel(Conversation)
    private readonly conversationRepository: typeof Conversation,
    @Inject(Services.PARTICIPANTS)
    private readonly participantsService: IParticipantsService,
    @Inject(Services.USERS)
    private readonly usersService: IUserService,
    private sequelize: Sequelize,
  ) {}
  async createConversation(user: User, params: CreateConversationParams) {
    const participants: Participant[] = [];
    const userDB = await this.usersService.findUserByEmailRelation({
      email: user.email,
    });

    if (!userDB.participant) {
      const newParticipant = await this.participantsService.createParticipant({
        id: params.authorId,
      });

      userDB.participant = newParticipant;
      // console.log(userDB.participant.id, 'checking participant');
      const participant = await this.usersService.saveUser(
        userDB.participant.id,
      );
      participants.push(participant);
    } else {
      participants.push(userDB.participant);
    }
    const recipient = await this.usersService.findUserByIdRelation({
      id: params.recipientId,
    });

    if (!recipient)
      throw new HttpException('Recipient not found', HttpStatus.BAD_REQUEST);

    if (!recipient.participant) {
      const newParticipant = await this.participantsService.createParticipant({
        id: params.recipientId,
      });

      recipient.participant = newParticipant;
      await this.usersService.saveUser(recipient.participant.id);
      participants.push(newParticipant);
    } else {
      participants.push(recipient.participant);
    }
    // console.log(participants, 'checking participants');
    const conversation = await this.conversationRepository.create({
      participants,
    });

    return {
      participants,
      conversation,
    };
  }
}
