import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
//import {AuthService} from 'src/AuthService';
import {DataService} from 'src/DataService';
import {TestingEvent} from 'src/app/models/TestingEvent';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import { Restaurant } from '../models/restaurant';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  usernameAttributes = "email";
  signIn:boolean;
  user:any;
  constructor(public authService:AuthService,public dataService:DataService,private amplifyServiceApi:AmplifyService,private router:Router) {
    console.log("Welcome"); 
    let signIn=true;
    let userAuth=null;
    userAuth= this.amplifyServiceApi.authStateChange$;
    userAuth.subscribe(authState=>{
      console.log("The user auth state is "+JSON.stringify(authState));
      if(authState.user==null){
        console.log("the user does not have any account yet");
        return signIn=false;
      }else{
        console.log("Welcome "+JSON.stringify(authState.user));
        const oneTodo = API.graphql(graphqlOperation(queries.getUser, { id: authState.user.username }));
        oneTodo.then(res=>{
          console.log(" GraphQL Response "+JSON.stringify(res));
          let restos:any=[];
          if(res.data.getUser!=null && res.data.getUser.restaurants.items.length != 0){
            const events:TestingEvent=null;
                      
            for(let myRestaurant of res.data.getUser.restaurants.items){
              let testings:any=[];
              let menus:any=[];
              let restaurantMenus:any=[];
              console.log("Trying something out 1 "+JSON.stringify( myRestaurant["addressLine1"]));
              
              console.log("the restaurant event menus"+JSON.stringify(myRestaurant["RestaurantMenus"]));
              if(myRestaurant["RestaurantMenus"]){
                if(myRestaurant["RestaurantMenus"].items.length!=0){
                  for(let restaurantMenu of myRestaurant["RestaurantMenus"].items){
                    console.log("The world famous menu is "+JSON.stringify(restaurantMenu));
                    restaurantMenus.push({
                      id:restaurantMenu.id,
                      menuType:restaurantMenu.menuType,
                      menuPortion:restaurantMenu.menuPortion,
                       menuPrice:restaurantMenu.menuPrice,
                       menuPicture:restaurantMenu.menuPicture,
                       menuName:restaurantMenu.menuName,
                       menuDescription:restaurantMenu.menuDescription

                    })
                  }

                }

              }
             
              restos.push({
                id:myRestaurant["id"],
                addressLine1:myRestaurant["addressLine1"],
                addressLine2:myRestaurant["addressLine2"],
                city:myRestaurant["city"],
                restaurantName:myRestaurant["restaurantName"],
                phoneNumber:myRestaurant["phoneNumber"],
                websiteAddress:myRestaurant["websiteAddress"],
                state:myRestaurant["state"],
                zipcode:myRestaurant["zipcode"],
                country:myRestaurant["country"],
                testingEvents:"",
                restaurantMenus:restaurantMenus
                
              });
            }

            console.log("the restos are  "+JSON.stringify(restos));

            
              
               
                 // console.log(" Event Menu was set !!!!!!!!!!!!!!!!!!!")
              this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
            
                 
                 
                
            
            
          
        }else if(res.data.getUser!=null && res.data.getUser.restaurants.items.length==0){
          restos.push({
            addressLine1:"",
            addressLine2:"",
            city:"",
            restaurantName:"",
            phoneNumber:"",
            websiteAddress:"",
            state:"",
            zipcode:"",
            country:"",
            testingEvents:"",
            restaurantMenus:[]
            
          });
          this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
        }else{
          restos.push({
            addressLine1:"",
            addressLine2:"",
            city:"",
            state:"",
            restaurantName:"",
            phoneNumber:"",
            websiteAddress:"",
            zipcode:"",
            country:"",
            testingEvents:"",
            restaurantMenus:[]
            
          });
          this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:"",lastname:"",restaurants:restos};
        }
          
          console.log("AuthService user "+JSON.stringify(this.user));
          this.dataService.saveUser(this.user).then(response=>{
            console.log("I am came in here");
            console.log("the user info inside the dataservice "+JSON.stringify(this.dataService.getUser()));
            this.router.navigate(['/owner']);
          });
        
        });
        
       
       
       
       
      }
    });
  
     
   }

    ngOnInit() {
     
   
  }

}
