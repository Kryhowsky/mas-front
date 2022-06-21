import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BorrowingsComponent } from './borrowings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { CommonAppModule } from 'src/app/common-app/common-app.module';
import { MatCardModule } from '@angular/material/card';
import { NgxsModule } from '@ngxs/store';
import { BorrowingsListComponent } from './borrowings-list/borrowings-list.component';
import { BorrowingsState } from './state/borrowings.state';
import { BorrowingsOvertimeComponent } from './borrowings-overtime/borrowings-overtime.component';
import { MatTableModule } from '@angular/material/table';
import { LibrarycardFormComponent } from './librarycard-form/librarycard-form.component';
import { AuthGuard } from 'src/app/private/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: BorrowingsComponent,
    children: [
      {
        path: "list",
        component: BorrowingsListComponent
      },
      {
        path: "overtime",
        component: BorrowingsOvertimeComponent
      },
      {
        path: "library-card",
        component: LibrarycardFormComponent,
        canActivate: [AuthGuard],
        data: {
          roles: ["ROLE_ADMIN", "ROLE_WORKER"]
        }
      }
    ]
  }
]

@NgModule({
  declarations: [
    BorrowingsComponent,
    BorrowingsListComponent,
    BorrowingsOvertimeComponent,
    LibrarycardFormComponent
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
    NgxsModule.forFeature([BorrowingsState])
  ]
})
export class BorrowingsModule { }
