import { Injectable } from "@nestjs/common";
import { UserDto } from './user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userDto: UserDto) {
    return this.prismaService.user.create({
      data: userDto,
    });
  }

  async deleteUser(id: number) {
    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });

    if (!deletedUser) {
      return null;
    }

    return deletedUser;
  }

  async updateUser(id: number, userDto: UserDto) {
    const updatedUser = await this.prismaService.user.update({
      where: {
        id: id,
      },
      data: userDto,
    });

    return updatedUser;
  }
}
