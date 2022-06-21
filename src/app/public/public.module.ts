import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { BorrowerModule } from './borrower/borrower.module';
import { BorrowingsModule } from './borrowings/borrowings.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    BorrowerModule,
    BorrowingsModule,
    MatTableModule,
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
        path: "borrowings",
        loadChildren: () => import("./borrowings/borrowings.module").then(m => m.BorrowingsModule)
      },
      {
        path: "books",
        loadChildren: () => import("./books/books.module").then(m => m.BooksModule)
      },
      {
        path: "forbidden",
        component: ForbiddenComponent
      }
    ])
  ]
})
export class PublicModule { }
