import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowerComponent } from './borrower.component';
import { BorrowerDetailsComponent } from './borrower-details/borrower-details.component';
import { BorrowerState } from './state/state/borrower.state';
import { CommonAppModule } from 'src/app/common-app/common-app.module';

const routes: Routes = [
  {
    path: "",
    component: BorrowerComponent,
    children: [
      {
        path: "details/:id",
        component: BorrowerDetailsComponent
      },
      {
        path: "list",
        component: BorrowersListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BorrowersListComponent,
    BorrowerDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    CommonAppModule,
    MatCardModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([BorrowerState])
  ]
})
export class BorrowerModule { }
