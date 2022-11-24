import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserCreateDtos, UserCreateResponseDtos, UserUpdateDtos, UserUpdateResponseDtos } from "./user.dtos";
import { rethrow } from "@nestjs/core/helpers/rethrow";

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

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
