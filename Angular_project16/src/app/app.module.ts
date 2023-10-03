import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
   OwnerloginComponent,
   OwnersignupComponent

   
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
