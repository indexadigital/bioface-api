import { UserDto } from "../dto/user.dto";

export enum Role {
  Admin = 'admin',
  Customer = 'customer',
}
export interface IAuthenticate {
  readonly user: UserDto;
  readonly token: string;
  readonly message: string;
}