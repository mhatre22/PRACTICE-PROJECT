import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';


@NgModule({
  declarations: [
    OwnerloginComponent,
    OwnersignupComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
