import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enums/user-role.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);

// Декораторы для разных ролей
export const Parent = () => Roles(UserRole.PARENT);
export const Child = () => Roles(UserRole.CHILD);