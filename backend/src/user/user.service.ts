import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto, CreateChildDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createParent(createUserDto: CreateUserDto): Promise<any> {
    return (this.prisma as any).parent.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        password: createUserDto.password,
      },
    });
  }

  async createChild(
    parentId: string,
    createChildDto: CreateChildDto,
  ): Promise<any> {
    const child = await (this.prisma as any).child.create({
      data: {
        name: createChildDto.name,
        password: createChildDto.password || '',
        birthDate: createChildDto.birthDate ? new Date(createChildDto.birthDate) : null,
        city: createChildDto.city,
        locale: createChildDto.locale,
        newsPrompt: createChildDto.newsPrompt,
      },
    });

    // Создаем связь ParentChild
    await (this.prisma as any).parentChild.create({
      data: {
        parentId,
        childId: child.id,
      },
    });

    // Создаем SpendingAccount для ребенка
    await (this.prisma as any).spendingAccount.create({
      data: {
        childId: child.id,
      },
    });

    return child;
  }

  async findByEmail(email: string): Promise<any | null> {
    return (this.prisma as any).parent.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<any | null> {
    const parent = await (this.prisma as any).parent.findUnique({
      where: { id },
      include: {
        children: {
          include: {
            child: true,
          },
        },
      },
    });
    if (parent) return parent;

    const child = await (this.prisma as any).child.findUnique({
      where: { id },
      include: {
        parents: {
          include: {
            parent: true,
          },
        },
      },
    });
    return child;
  }

  async updateParent(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return (this.prisma as any).parent.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async updateChild(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return (this.prisma as any).child.update({
      where: { id },
      data: {
        ...(updateUserDto.name && { name: updateUserDto.name }),
        ...(updateUserDto.password && { password: updateUserDto.password }),
        ...(updateUserDto.birthDate && { birthDate: new Date(updateUserDto.birthDate) }),
        ...(updateUserDto.city !== undefined && { city: updateUserDto.city }),
        ...(updateUserDto.locale !== undefined && { locale: updateUserDto.locale }),
        ...(updateUserDto.newsPrompt !== undefined && { newsPrompt: updateUserDto.newsPrompt }),
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    // Проверяем, является ли пользователь родителем или ребенком
    const parent = await (this.prisma as any).parent.findUnique({ where: { id } });
    if (parent) {
      return this.updateParent(id, updateUserDto);
    }

    const child = await (this.prisma as any).child.findUnique({ where: { id } });
    if (child) {
      return this.updateChild(id, updateUserDto);
    }

    throw new Error('User not found');
  }

  async deleteParent(id: string): Promise<any> {
    return (this.prisma as any).parent.delete({ where: { id } });
  }

  async deleteChild(id: string): Promise<any> {
    return (this.prisma as any).child.delete({ where: { id } });
  }

  async delete(id: string): Promise<any> {
    const parent = await (this.prisma as any).parent.findUnique({ where: { id } });
    if (parent) {
      return this.deleteParent(id);
    }

    const child = await (this.prisma as any).child.findUnique({ where: { id } });
    if (child) {
      return this.deleteChild(id);
    }

    throw new Error('User not found');
  }

  async getChildrenByParentId(parentId: string): Promise<any[]> {
    const parentChildren = await (this.prisma as any).parentChild.findMany({
      where: { parentId },
      include: {
        child: true,
      },
    });

    return parentChildren.map((pc: any) => pc.child);
  }

  async getParentsByChildId(childId: string): Promise<any[]> {
    const childParents = await (this.prisma as any).parentChild.findMany({
      where: { childId },
      include: {
        parent: true,
      },
    });

    return childParents.map((cp: any) => cp.parent);
  }
  
  // getParentByChildId removed for now; use getParentsByChildId in future

  async getChildByName(name: string): Promise<any | null> {
    return (this.prisma as any).child.findFirst({
      where: { name },
    });
  }
}
