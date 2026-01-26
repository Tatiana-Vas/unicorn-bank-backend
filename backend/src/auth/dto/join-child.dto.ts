import { IsString, Length } from 'class-validator';

export class JoinChildDto {
  @IsString({ message: 'Invitation code is required' })
  invitationCode: string;

  @IsString({ message: 'PIN is required' })
  @Length(4, 4, { message: 'PIN must be exactly 4 characters long' })
  pin: string;
}