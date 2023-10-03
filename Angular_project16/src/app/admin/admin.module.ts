import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';



@NgModule({
  declarations: [
    AdminloginComponent,
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
