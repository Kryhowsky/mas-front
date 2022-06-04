import { LoginDto } from 'src/api/models';

export class LoginAction {
  static readonly type = '[Auth] LoginAction';
  constructor(public loginDto: LoginDto) { }
}
