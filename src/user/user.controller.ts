import { Controller, Post, Body, Delete, Param, NotFoundException, ParseIntPipe, Put,Get } from "@nestjs/common";
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create-user")
  createNewUser(@Body() userDto: UserDto) {
    try {
      return this.userService.createUser(userDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete("/delete-user/:id")
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      const deletedUser = await this.userService.deleteUser(id);
      return { message: `User with ID ${id} has been deleted successfully.` };
    } catch (error) {
      throw error;
    }
  }

  @Put("/update-user/:id")
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userDto: UserDto) {
    try {
      const updatedUser = await this.userService.updateUser(id, userDto);
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      return { message: `User with ID ${id} has been updated successfully.` };
    } catch (error) {
      throw error;
    }
  }

}
