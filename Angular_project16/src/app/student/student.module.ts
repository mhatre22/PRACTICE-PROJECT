import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';



@NgModule({
  declarations: [
   
  
    StudentdemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule {
 
 }
