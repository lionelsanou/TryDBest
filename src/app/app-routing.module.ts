import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { DinnerProfileComponent } from './dinner-profile/dinner-profile.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path:"auth",component:AuthComponent},
  {path:"login",component:AuthComponent},
  {path:"owner",component:OwnerProfileComponent,canActivate:[AuthGuard]},
  {path:"dinner",component:DinnerProfileComponent,canActivate:[AuthGuard]},
  {path:"search",component:SearchPageComponent},
  {path:"landing",component:LandingPageComponent},
  {path:"**",component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
