import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';

const routes: Routes = [
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studentsignup',component:StudentsignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
