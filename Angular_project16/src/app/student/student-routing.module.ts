import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentactivityComponent } from './studentactivity/studentactivity.component';

const routes: Routes = [
  {path:'student' , component: StudentactivityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
