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
tableHeadings : string[]=['CarName','CarPrice','CarColor']

CarDetail =[
{CarName: 'minicup', CarPrice:800000, CarColor:'Black'},
{CarName: 'marcedeez', CarPrice:1200000, CarColor:'White'},
{CarName: 'thar', CarPrice:900000, CarColor:'Black'},
{CarName: 'swift', CarPrice:200000, CarColor:'Black'},
]
color  = 'pink';


}
