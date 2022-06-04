import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../public/auth/state/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly store: Store, private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentUser = this.store.selectSnapshot(AuthState.currentPerson)

      if (currentUser) {
        const roles = route.data["roles"]

        if (roles) {
          if (currentUser.roles.some(role => roles.includes(role))) {
            return true
          }

          this.router.navigate(["/forbidden"])
          return false
        }
        return true
      }
      this.router.navigate(["/auth/login"])
    return false;
  }
  
}
