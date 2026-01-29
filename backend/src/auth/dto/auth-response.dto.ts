import { Exclude } from 'class-transformer';

export class AuthResponseDto {
  accessToken: string;
  user: any;
  
  @Exclude()
  password?: string;
  
  constructor(partial: Partial<AuthResponseDto>) {
    Object.assign(this, partial);
  }
}
