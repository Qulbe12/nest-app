import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class UserCreateDtos{
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
}

export class UserUpdateDtos{
  @ApiProperty()
  id: number
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
}

export class UserUpdateResponseDtos{
  @ApiProperty()
  id: number
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
}

export class UserCreateResponseDtos{
  @ApiProperty()
  id: number
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
}


