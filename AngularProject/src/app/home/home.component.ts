import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 constructor( private route:Router){

 }
adminlogin(){
this.route.navigateByUrl('admin/adminlogin')
}
adminsignup(){
  this.route.navigateByUrl('admin/adminsignup')
}
ownerlogin(){
  this.route.navigateByUrl('owner/ownerlogin')
}
ownersignup(){
  this.route.navigateByUrl('owner/ownersignup')
}
  }