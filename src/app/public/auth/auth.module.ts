import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule,
  ]
})
export class AuthModule { }
