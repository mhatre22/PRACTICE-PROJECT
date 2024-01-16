import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoggIn :boolean = true;
  toggleMe:boolean = true;
  list :any []=[];



  toggle(){
    this.toggleMe = !this.toggleMe;
  }
  todolist(item:string){
    this.list.push({id :this.list.length,name:item})
    console.log(this.list);

  }
  removeitem(id:number){
 this.list= this.list.filter(item=>item.id!==id);
    console.log(id)
  }
name = 'Snehalmhatre';
color = "wite" ;
  getValue(val:string){
    console.log(val);
  }
  displayValue : string = ''
  keyupvalue(name:string){
    console.log(name)
    this.displayValue = name;
  }
count = 0;
counterValue(){
  this.count++;
  console.log(this.count);
  
}
counterValue1(){
  this.count--;
  console.log(this.count)
}
studentHeading =['Name','Phone','Email','City','Gender']
details = [
  {name :'Snehal mhatre', phone : 9865321457, email: 'mhatresnehal75@gmail.com',city:'pen',gender:'F'},
  {name :'Apeksha mhatre', phone : 9124567457, email: 'apumhatre05@gmail.com',city:'pali',gender:'F'},
  {name :'Ramesh patil', phone : 9785321457, email: 'rameshpatil01@gmail.com',city:'mumbai',gender:'M'},
  {name :'Suresh wagh', phone : 9865365857, email: 'sureshwagh95@gmail.com',city:'peth',gender:'M'},
]



  }