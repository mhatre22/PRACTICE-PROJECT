import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

const routes: Routes = [{path:'ownerlogin',component:OwnerloginComponent},
{path:'ownersignup',component:OwnersignupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
