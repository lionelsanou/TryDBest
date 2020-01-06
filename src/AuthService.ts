import {Injectable} from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Observable} from 'rxjs/Rx';

import {User} from './app/models/user';
import {Restaurant} from './app/models/restaurant';
import {TestingEvent} from './app/models/testingEvent';
import {EventMenu} from './app/models/eventMenu';


@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    public user:User;
    constructor(private amplifyServiceApi:AmplifyService){}

    public async isUserLoggedIn():Promise<boolean>{
        let signIn=true;
        let userAuth=null;
        userAuth= this.amplifyServiceApi.authStateChange$;
        await userAuth.subscribe(authState=>{
          console.log("The user auth state is "+JSON.stringify(authState));
          if(authState.user==null){
            console.log("the user does not have any account yet");
            return signIn=false;
          }else{
            console.log("Welcome "+JSON.stringify(authState.user));
            //this.user=authState.user;
            this.user={id:authState.user.username,email:authState.user.attributes.email};
            console.log("AuthService user "+JSON.stringify(this.user));
            //this.dataService.saveUser(this.user);
            return signIn=true;
           
          }
        }); 
        return;       
        
    }
}