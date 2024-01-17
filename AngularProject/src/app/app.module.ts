import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
