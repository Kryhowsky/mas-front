import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild([
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      },
      {
        path: "forbidden",
        component: ForbiddenComponent
      }
    ])
  ]
})
export class PublicModule { }
