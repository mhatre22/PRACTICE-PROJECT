
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signUpForm !: FormGroup;
  
constructor( private formBuilder : FormBuilder,private dataService : DataService,
  private router :Router ){}
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

submit( )  {
  console.log(this.signUpForm.value);
  this.dataService.userFullname = this.signUpForm.value.userfullname;
  this.router.navigateByUrl('landing')
}

}

