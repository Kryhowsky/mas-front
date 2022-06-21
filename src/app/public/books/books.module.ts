import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Routes, RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CommonAppModule } from 'src/app/common-app/common-app.module';
import { NgxsModule } from '@ngxs/store';
import { BooksState } from './state/books.state';

const routes: Routes = [
  {
    path: "",
    component: BooksComponent,
    children: [
      {
        path: "list",
        component: BooksListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    CommonAppModule,
    MatCardModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([BooksState])
  ]
})
export class BooksModule { }
