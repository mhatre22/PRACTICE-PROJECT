import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DirectivesInAngularComponent,
    LandingComponent,
    
  
 
   


   
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
