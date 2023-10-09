
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
  fullname : ['',[Validators.required, Validators.pattern("[a-zA-Z]*$"), Validators.minLength(15)]],
  email : ['', Validators.required, Validators.email],
  contact : ['', Validators.required],
  address : ['', Validators.required],
  gender : ['', Validators.required]
})
}

submit()  {
}

}

