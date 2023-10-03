import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';


@NgModule({
  declarations: [
    StudentloginComponent,
    StudentsignupComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
