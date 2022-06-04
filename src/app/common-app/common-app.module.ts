import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowersTableComponent } from './borrowers-table/borrowers-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    BorrowersTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[BorrowersTableComponent]
})
export class CommonAppModule { }
