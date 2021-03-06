import { LoginDto } from 'src/api/models';

export class LoginAction {
  static readonly type = '[Auth] LoginAction';
  constructor(public loginDto: LoginDto) { }
}

export class GetCurrentUserAction {
  static readonly type = '[Auth] GetCurrentUserAction';
  constructor() {}
}

export class LoginFromLocalStorageAction {
  static readonly type = '[Auth] LoginFromLocalStorageAction';
  constructor() {}
}

export class LogoutAction {
  static readonly type = '[User] LogoutAction';
  constructor() {}
}
