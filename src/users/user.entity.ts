import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "username"})
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
