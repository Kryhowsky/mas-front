import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ComponentComponent } from './component/component.component';



@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class PublicModule { }
