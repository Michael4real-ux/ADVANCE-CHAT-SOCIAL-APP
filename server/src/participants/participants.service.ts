import { Injectable } from '@nestjs/common';
import { Participant } from '../utils/sequelize';
import { CreateParticipantParams, FindParticipantParams } from '../utils/types';
import { IParticipantsService } from './participants';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ParticipantsService implements IParticipantsService {
  constructor(
    @InjectModel(Participant)
    private readonly participantRepository: typeof Participant,
    private sequelize: Sequelize,
  ) {}
  findParticipant(params: FindParticipantParams): Promise<Participant | null> {
    return this.participantRepository.findOne({
      where: { id: params.id },
    });
  }
  async createParticipant(
    params: CreateParticipantParams,
  ): Promise<Participant> {
    return await this.participantRepository.create({
      params,
    });
    //console.log(participant, 'checking participants');
    // return participant;

    // return this.participantRepository.create(participant);
  }
}
