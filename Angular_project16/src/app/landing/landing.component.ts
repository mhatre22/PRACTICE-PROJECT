 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
test : any;
userName! : string
constructor(private router : Router,
   private dataservice :DataService){//Injection depencency
   
  }
  
ngOnInit(){
  this.userName =this.dataservice.userFullname;
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
directive(){
  this.router.navigateByUrl('directive')
}
}

