
import { Component } from '@angular/core';
import { FormGroup ,FormBuilder,Validator} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signUpForm! : FormGroup;



constructor(private formBuilder : FormBuilder){
}
ngOnInit(){

  this.signUpFormControlls();
}

signUpFormControlls(){
this.signUpForm = this.formBuilder.group({
name : ['',],
email : ['',],
contact : ['',],
address : ['',],
gender : ['',]

})

}

}

