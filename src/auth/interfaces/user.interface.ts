import { UserDto } from "../dto/user.dto";

export enum Role {
  Admin = 'admin',
  Client = 'client',
  App = 'app',
}
export interface IAuthenticate {
  readonly user: UserDto;
  readonly token: string;
  readonly message: string;
}