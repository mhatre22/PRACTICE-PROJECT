import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
constructor(private fb :FormBuilder){

}
ngOnInit(){
  this.formDef();
}

formDef(){
 this.fb.group({

  })
}
}
