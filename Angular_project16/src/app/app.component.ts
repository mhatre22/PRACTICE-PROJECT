import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_project16';
  constructor(private router:Router){
  }
  homecomponent(){
    this.router.navigateByUrl('/home')
  }
  aboutcomponent(){
    this.router.navigateByUrl('/about')
  }
  usercomponent(){
    this.router.navigateByUrl('/user')
  }
  adminlogincomponent(){
  this.router.navigateByUrl('/admin/adminlogin')
 
 }
    
  }




  

