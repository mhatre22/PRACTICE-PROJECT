import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminModule
  ]
})
export class AdminModule {
  constructor(private router:Router){
  }
 
adminlogincomponent(){
  this.router.navigateByUrl('/adminlogin')
}
adminsignupcomponent(){
  this.router.navigateByUrl('/adminsignup')
}
 }
