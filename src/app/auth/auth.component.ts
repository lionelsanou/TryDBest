import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {AuthService} from 'src/AuthService';
import {DataService} from 'src/DataService';
import {TestingEvent} from 'src/app/models/TestingEvent';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  usernameAttributes = "email";
  signIn:boolean;
  user:any;
  constructor(public dataService:DataService,private amplifyServiceApi:AmplifyService,private router:Router) {
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
          if(res.data.getUser!=null && res.data.getUser.restaurants.items.length != 0){
            const events:TestingEvent=null;
            let restos:any=[];          
            for(let myRestaurant of res.data.getUser.restaurants.items){
              let testings:any=[];
              let menus:any=[];
              console.log("Trying something out 1 "+JSON.stringify( myRestaurant["addressLine1"]));
              if(myRestaurant["tastingEvents"]){           
              for(let tastes of myRestaurant["tastingEvents"].items ){               
                if(tastes["eventMenus"]){              
                  for(let myMenu of tastes["eventMenus"].items ){
                    console.log("Trying something out 3"+JSON.stringify(myMenu));
                    menus.push({
                      id:myMenu["id"],
                      menuPicture:myMenu["menuPicture"], 
                      menuPrice:myMenu["menuPrice"]
                    })

                  }
                }
                  console.log("Trying something out 2"+JSON.stringify(tastes));
                  testings.push({
                    testingEventName:tastes["testingEventName"],
                    eventStartDate:tastes["eventStartDate"],
                    eventEndDate:tastes["eventEndDate"],
                    id:tastes["id"],
                    eventMenus:menus
                  })
              }
            }
              restos.push({
                addressLine1:myRestaurant["addressLine1"],
                addressLine2:myRestaurant["addressLine2"],
                city:myRestaurant["city"],
                state:myRestaurant["state"],
                zipcode:myRestaurant["zipcode"],
                country:myRestaurant["country"],
                testingEvents:testings,
                
              })
            }

            console.log("the restos are  "+JSON.stringify(restos));

            if(JSON.stringify(res.data.getUser.restaurants.items[0].tastingEvents.items)=="[]"){
              console.log("There is no tasting event ");
            
              this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
            }else{

              
                //Let's check and see and if Tasting event menu was set
                if(JSON.stringify(res.data.getUser.restaurants.items[0].tastingEvents.items[0].eventMenus.items)=="[]"){
                  console.log("The Tasting Event was set, but no event menu"+JSON.stringify(res.data.getUser.restaurants.items[0].tastingEvents));
                  this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
                
                }else{
                  console.log(" Event Menu was set !!!!!!!!!!!!!!!!!!!")
              this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
            
                 
                 
                }
            
            }
          
        }else if(res.data.getUser!=null && res.data.getUser.restaurants.items.length==0){
          this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:{addressLine1:"",
            addressLine2:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
          }};
        }else{
          this.user={id:authState.user.username,email:authState.user.attributes.email,firstname:"",lastname:"",restaurants:{addressLine1:"",
            addressLine2:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
          }};
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
