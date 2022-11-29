import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Entity({name : "username"})
export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
