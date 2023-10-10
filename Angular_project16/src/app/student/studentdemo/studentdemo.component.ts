import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validator } from '@angular/forms';


@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent {

signInForm!: FormGroup
showSignInForm : boolean =false;
constructor(private formBuilder: FormBuilder){}
showForm(){
this.showSignInForm = true;
this.signInForm = this.formBuilder.group({
  password:[],
  confirmpassword:[]
})
}

}
