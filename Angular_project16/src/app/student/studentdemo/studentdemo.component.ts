import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent {
  constructor(private router :Router){
  }
  landing(){
    this.router.navigateByUrl('landing')
  }

}
