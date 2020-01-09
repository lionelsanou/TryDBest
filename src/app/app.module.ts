import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { DinnerProfileComponent } from './dinner-profile/dinner-profile.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


 
import {AuthService} from 'src/AuthService';
import {DataService} from 'src/DataService';
import {AuthGuard} from './auth.guard';
import { NavigationbarComponent } from './navigation/navigation.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OwnerProfileComponent,
    DinnerProfileComponent,
    SearchPageComponent,
    LandingPageComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    ReactiveFormsModule,
      OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
  
   
   
  ],
  providers: [DataService,AmplifyService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
