import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
constructor(private router : Router){
}
login(){
  this.router.navigateByUrl('login')
}
signup(){
  this.router.navigateByUrl('signup')
}
studentactivity(){
  this.router.navigateByUrl('student/studentactivity')
}
studentdemo(){
  this.router.navigateByUrl('student/studentdemo')
}
}
