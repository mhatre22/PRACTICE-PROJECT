import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives-in-angular',
  templateUrl: './directives-in-angular.component.html',
  styleUrls: ['./directives-in-angular.component.css']
})
export class DirectivesInAngularComponent {
  constructor(private router :Router){
  }
landing(){
  this.router.navigateByUrl('landing')
}
show= true;






}
