import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoginAction } from './auth.actions';
import { LoginControllerService, PersonControllerService } from 'src/api/services';
import { tap } from 'rxjs/operators';
import { PersonDto } from 'src/api/models';

export class AuthStateModel {
  public token: string;
  public currentPerson: PersonDto;
}

const defaults = {
  token: null,
  currentPerson: null
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  constructor(private readonly personService: PersonControllerService, private readonly loginControllerService: LoginControllerService) {

  }

  @Selector()
  static token(authStateModel: AuthStateModel) {
    return authStateModel.token
  }

  @Selector()
  static currentPerson(authStateModel: AuthStateModel) {
    return authStateModel.currentPerson
  }

  @Action(LoginAction)
  login({ patchState }: StateContext<AuthStateModel>, { loginDto }: LoginAction) {
    return this.loginControllerService.authenticateUser({body: loginDto}).pipe(tap(response => patchState({token: response.token})))
  }
}
