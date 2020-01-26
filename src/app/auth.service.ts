import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AmplifyService} from 'aws-amplify-angular';
import {Auth} from 'aws-amplify';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import {DataService} from 'src/DataService';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public dataService:DataService,private amplifyServiceApi:AmplifyService) { } 

  public isUserLoggin():Promise<boolean> {
    return Auth.currentAuthenticatedUser()
      .then((res) => { 
        console.log("The user info is "+JSON.stringify(res));
        console.log("The user authentication key is "+JSON.stringify(res.username));
        this.dataService.user.id=res.username;
        this.dataService.user.email=res.attributes.email;
        console.log("Great");
        return true; })
      .catch(() => { return false; });
    
  }
  public getUserProfileData():Promise<boolean>{

    const queryResponse=API.graphql(graphqlOperation(queries.getUser, { id: this.dataService.user.id }));
    return queryResponse.then(res=>{
      console.log("the query resposne is "+res);
      let restos:any=[];
      let user:any;
      if(res.data.getUser!=null && res.data.getUser.restaurants.items.length != 0){                  
        for(let myRestaurant of res.data.getUser.restaurants.items){
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
          user={id:this.dataService.user.id,email:this.dataService.user.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
        
             
             
            
        
        
      
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
      user={id:this.dataService.user.id,email:this.dataService.user.email,firstname:res.data.getUser.firstname,lastname:res.data.getUser.lastname,restaurants:restos};
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
      user={id:this.dataService.user.id,email:this.dataService.user.email,firstname:"",lastname:"",restaurants:restos};
    }
      
      console.log("AuthService user "+JSON.stringify(user));
      this.dataService.saveUser(user).then(response=>{
        console.log("I am came in here");
        console.log("the user info inside the dataservice "+JSON.stringify(this.dataService.getUser()));
        
      });

      return true;
    })
    .catch(()=>{return false});
  }
}
