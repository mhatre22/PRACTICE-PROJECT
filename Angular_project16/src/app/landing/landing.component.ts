 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
test : any;
userName! : string
constructor(private router : Router,
     private storingdataservice :StoringDataService,
  ){//Injection depencency
   
  }
  
ngOnInit(){

 this.userName = this.storingdataservice.userFullName;
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

