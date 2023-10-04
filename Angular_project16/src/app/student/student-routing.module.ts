import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentactivityComponent } from './studentactivity/studentactivity.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';

const routes: Routes = [
  {path:'studentactivity' , component: StudentactivityComponent},
  {path: 'studentdemo', component : StudentdemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
