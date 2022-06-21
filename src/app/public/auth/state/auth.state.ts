import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCurrentUserAction, LoginAction, LoginFromLocalStorageAction, LogoutAction } from './auth.actions';
import { LoginControllerService, PersonControllerService } from 'src/api/services';
import { tap } from 'rxjs/operators';
import { PersonDto } from 'src/api/models';
import { Navigate } from '@ngxs/router-plugin';

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
  login({ patchState, dispatch }: StateContext<AuthStateModel>, { loginDto }: LoginAction) {
    return this.loginControllerService.authenticateUser({body: loginDto}).pipe(
      tap(response => {
        patchState({
          token: response.token
        })
        localStorage.setItem("token", response.token)
        dispatch(new GetCurrentUserAction())
        dispatch(new Navigate(["/"]))
      })
    )
  }

  @Action(GetCurrentUserAction)
  getCurrentUser( { patchState }: StateContext<AuthStateModel> ) {
    return this.personService.getCurrentUser().pipe(
      tap(response => patchState({currentPerson: response}))
    )
  }

  @Action(LoginFromLocalStorageAction)
  loginFromLocalStorage( { patchState, dispatch }: StateContext<AuthStateModel> ) {
    const token = localStorage.getItem("token");

    if (token) {
      patchState({
        token
      })
      dispatch(new GetCurrentUserAction())
      // dispatch(new LogoutAction())
    }

  }

  @Action(LogoutAction)
  logoutUser({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      token: null,
      currentPerson: null
    })
    localStorage.removeItem("token")
  }

}
