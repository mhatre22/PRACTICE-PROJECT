import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent {

  SignInForm!: FormGroup
showSignInForm : boolean =false;
passwordValue : any;
confirmpasswordValue:any;
isMatch!: boolean;
isMacthConfirm!: boolean;
pass: any;
confirmpass: any;
showpassword! : boolean;
  showPassword !: boolean;
constructor(private formBuilder: FormBuilder){}
showForm(){
//this.showSignInForm = true;
this.showSignInForm =! this.showSignInForm
this.formDef();
}
formDef(){


this.SignInForm = this.formBuilder.group({
  fullname : ['',[Validators.required, Validators.pattern("[a-zA-Z]*$"), Validators.minLength(10)]],
  mobilenumber : ['',[Validators.required, Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  password:[''],
  confirmpassword:[''],
  name : ['',[Validators.required,this.nameValidation,this.whitespaceValidation]]
})
}
whitespaceValidation(name:any){
  let data=name.value;
  let newdata = data?.trim();
  let isValid = data.length !=newdata.length;
  return isValid ? {whitespace:true}: null
}
nameValidation(inp:any){
  console.log(inp.value);
  let data = inp.value?.toLowerCase();
  let isErr = data.includes('copy')
  return isErr ?{Err : true}:null

}
passwordValidation(inp:any){
  console.log(inp.value);
  console.log(this.pass);
}

password(){
  this.passwordValue = this.SignInForm.value.password;
  if(this.passwordValue == this.confirmpasswordValue){
    this.isMatch = true;
  }
  else{
    this.isMatch= false;
  }
}
confirmpassword(){
  this.confirmpasswordValue = this.SignInForm.value.confirmpassword;
  if(this.passwordValue == this.confirmpasswordValue){
    this.isMacthConfirm == true;
  }
  else{
    this.isMacthConfirm=false;
  }}
  showPass(){
this.showPassword=!this.showPassword
  }
}








