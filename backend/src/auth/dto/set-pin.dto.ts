import { IsString, Length, Matches } from 'class-validator';

export class SetPinDto {
  @IsString({ message: 'PIN is required' })
  @Length(4, 4, { message: 'PIN must be exactly 4 characters long' })
  @Matches(/^\d{4}$/, { message: 'PIN must contain only digits' })
  pin: string;
}
