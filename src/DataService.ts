import {Injectable} from '@angular/core';
import {User} from 'src/app/models/user';
import { Restaurant } from './app/models/restaurant';

@Injectable({
    providedIn: 'root',
  })
export class DataService{
    public user:User=new User();
    public async saveUser(userInput:User):Promise<void>{
        this.user = userInput;
        if(typeof userInput.firstname!='undefined' && userInput.firstname){
            this.user.firstname=userInput.firstname;
        }else if(typeof userInput.lastname!='undefined' && userInput.lastname){
            this.user.lastname=userInput.lastname;
        }else if(typeof userInput.profilePicture!='undefined' && userInput.profilePicture){
            this.user.profilePicture=userInput.profilePicture;
        }else if(typeof userInput.id!='undefined' && userInput.id){
            this.user.id=userInput.id;
        }else if(typeof userInput.email!='undefined' && userInput.email){
            this.user.email=userInput.email;
        }
        console.log("DataService : Value of User Object "+JSON.stringify(this.user));
    }
    public async saveAddress(address:any):Promise<void>{
        this.user.restaurants.push(address);
    }
    public getUser():User{
        return this.user;
    }
    public updateUser

}