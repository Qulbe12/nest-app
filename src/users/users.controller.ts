import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserEntity } from "./user.entity";
import { UserCreateDtos, UserCreateResponseDtos, UserUpdateDtos } from "./user.dtos";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get()
  async fillAll(){
    const response = await this.userService.findAll()
    return response
  }

  @Get(":id")
  async findOne(@Param() id: number): Promise<UserCreateResponseDtos>{
    const response = await this.userService.findOne(id)
    return response
  }

  @Post("/create-user")
  async create(@Body() createUserDto: UserCreateDtos, @Req() req: Request): Promise<UserCreateResponseDtos> {
    console.log(req)
    const response = await this.userService.create(createUserDto)
    return response
  }

  @Put(":id")
  async update(@Param() id: number , @Body() createUserDto: UserUpdateDtos){
    const response = await this.userService.update(id , createUserDto)
    return response
  }

  @Delete(":id")
  async delete(@Param() id: number) {
    const response = await this.userService.remove(id)
    return response
  }
}
