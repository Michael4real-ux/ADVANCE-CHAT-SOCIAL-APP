import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  @IsNotEmpty()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
