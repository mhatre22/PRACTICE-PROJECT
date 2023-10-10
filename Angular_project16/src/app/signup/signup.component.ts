
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signUpForm !: FormGroup;
  
constructor( private formBuilder : FormBuilder){
}
  ngOnInit(){
    this.signUpFormControlls()
  }
  signUpFormControlls(){
this.signUpForm = this.formBuilder.group({
  fullname : ['',[Validators.required, Validators.pattern("[a-zA-Z]*$"), Validators.minLength(10)]],
  email : ['', [Validators.required, Validators.email,]],
mobilenumber : ['',[Validators.required, Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  address : ['', Validators.required],
  gender : ['', Validators.required]
})
}

submit( formData:any)  {
  console.log(formData);
}

}

