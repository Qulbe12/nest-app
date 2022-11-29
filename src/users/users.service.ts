import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import {
  UserCreateDtos,
  UserCreateResponseDtos,
  UserDeleteDtos, UserDeleteResponseDtos,
  UserUpdateDtos,
  UserUpdateResponseDtos
} from "./user.dtos";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {
  }

  findAll(): Promise<UserCreateResponseDtos[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<UserCreateResponseDtos> {
    return this.usersRepository.findOneBy({ id });
  }

  create(user: UserCreateDtos): Promise<UserCreateResponseDtos>{
    return this.usersRepository.save(user)
  }

  async update(id: number , user: UserUpdateDtos){
    await this.usersRepository.update(id , user)
  }

  async remove(id: number): Promise<UserDeleteDtos>{
    const data = await this.usersRepository.findOneBy({ id })
    await this.usersRepository.remove(data)
    return data
  }
}
