import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { BorrowerModule } from './borrower/borrower.module';



@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    BorrowerModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      },
      {
        path: "borrower",
        loadChildren: () => import("./borrower/borrower.module").then(m => m.BorrowerModule)
      },
      {
        path: "forbidden",
        component: ForbiddenComponent
      }
    ])
  ]
})
export class PublicModule { }
