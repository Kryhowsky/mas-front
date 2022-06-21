import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../public/auth/state/auth.state';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly store: Store, private readonly matSnackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.store.selectSnapshot(AuthState.token)

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        if (error.error.message) {
          this.matSnackBar.open(error.error.message, "X", {duration: 5000, verticalPosition: "top"})
        } else {
          if (error.error) {
            const err = JSON.parse(error.error)
            this.matSnackBar.open(err.message, "X", {duration: 5000, verticalPosition: "top"})
          } else {
            this.matSnackBar.open("Unexpected error..", "X", {duration: 5000, verticalPosition: "top"})
          }
        }
        return throwError(error)
      })
    );
  }
}
