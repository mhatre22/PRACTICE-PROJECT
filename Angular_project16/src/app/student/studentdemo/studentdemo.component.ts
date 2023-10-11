import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';


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
  fullname : ['',[Validators.required, Validators.pattern("[a-zA-Z]*$"), Validators.minLength(10)]],
  mobilenumber : ['',[Validators.required, Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  password:['',[Validators.required, Validators.pattern("[[A-Z]{1}[a-zA-Z0-9@#!$%&^*]{8}$]"), Validators.minLength(9),Validators.maxLength(10)]],
  confirmpassword:['',[Validators.required, Validators.pattern("[[A-Z]{1}[a-zA-Z0-9@#!$%&^*]{8}$]"), Validators.minLength(9)]]
})
}



submit(formData:any){
  console.log(formData)

}
}