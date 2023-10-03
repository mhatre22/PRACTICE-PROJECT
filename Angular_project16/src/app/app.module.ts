import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LangingComponent } from './langing/langing.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    LangingComponent,
   


   
  
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
