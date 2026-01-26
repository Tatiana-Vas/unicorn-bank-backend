POST /children
Request:
- name: string
- password: string

Response:
- id
- name



export class CreateChildDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  password: string;
}


@Post()
createChild(
  @CurrentParent() parent: Parent,
  @Body() dto: CreateChildDto,
) {
  return this.childrenService.create(parent.id, dto);
}


PATCH /children/:id/profile

export class UpdateChildProfileDto {
  @IsDateString()
  birthDate?: string;

  @IsString()
  city?: string;

  @IsString()
  locale?: string;

  @IsString()
  @MaxLength(2000) // например
  newsPrompt?: string;
}

updateProfile(childId, dto) {
  return this.prisma.child.update({
    where: { id: childId },
    data: dto,
  });
}
