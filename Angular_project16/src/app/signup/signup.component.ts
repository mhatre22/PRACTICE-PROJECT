
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { StoringDataService } from '../storing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signUpForm !: FormGroup;
  
constructor( private formBuilder : FormBuilder,
   private storingdataservice :StoringDataService,
  private router :Router ){
    
  }
  ngOnInit(){
    this.signUpFormControlls()
  this.storingdataservice.studendData = this.student;// set student object to services
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
student={
  name:'snehal',
  city:'pen',
  phone:'25642542542',
  status:'active'
}

submit(){
console.log(this.signUpForm.value);
 this.storingdataservice.userFullName = this.signUpForm.value.fullname;
 this.storingdataservice.listOfUsers =['snehal', 'bala', 'apeksha','sumeet']
 this.router.navigateByUrl('/landing');
}

}

