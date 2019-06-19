import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    HomeComponent,
    CustomerdetailsComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot( {  
        positionClass:'top-right',  
        closeButton: true,  
          
      })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
