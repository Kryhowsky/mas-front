import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowersTableComponent } from './borrowers-table/borrowers-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { BorrowingsTableComponent } from './borrowings-table/borrowings-table.component';
import { BooksTableComponent } from './books-table/books-table.component';



@NgModule({
  declarations: [
    BorrowersTableComponent,
    BorrowingsTableComponent,
    BooksTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[BorrowersTableComponent, BorrowingsTableComponent, BooksTableComponent]
})
export class CommonAppModule { }
