import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-studentactivity',
  templateUrl:'./studentactivity.component.html',
  styleUrls: ['./studentactivity.component.css']
})
export class StudentactivityComponent {


  constructor(private router :Router){
  }
  landing(){
    this.router.navigateByUrl('landing')
  }


}
