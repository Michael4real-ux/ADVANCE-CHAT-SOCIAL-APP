import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(16)
  @IsOptional()
  username: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  lastName: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
