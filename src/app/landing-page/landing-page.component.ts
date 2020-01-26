import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public router:Router,private auth:AuthService) { }
  isLoggedIn:boolean;
  ngOnInit() {
    this.auth.isUserLoggin().then(response=>{
      if(response){
        this.isLoggedIn=true;
      }
    });
  }

  search(){
    this.router.navigate(['/search']);
  }

}
