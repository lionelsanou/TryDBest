
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {AuthService} from 'src/app/auth.service';
import {DataService} from 'src/DataService';


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import { Restaurant } from '../models/restaurant';
 

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  restaurants:any=[];
  isLoggedIn:boolean;
  searchTerm:string;
  imagepath:string="https://trydbest53f23423bbfe40a68e9e755f4ceda094-dev.s3.amazonaws.com/public/";
  constructor(private auth:AuthService,private router:Router,private dataService:DataService) { 

    const oneTodo = API.graphql(graphqlOperation(queries.listRestaurants));
    oneTodo.then(response=>{
      console.log(JSON.stringify(response));
      for(let myRestaurant of response.data.listRestaurants.items){
        let restaurantMenus:any=[];
        console.log("Trying something out 1 "+JSON.stringify( myRestaurant["addressLine1"]));
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




        this.restaurants.push({
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
          restaurantMenus:restaurantMenus
          
          
          
        });
      }
      console.log("The Restaurant info is "+JSON.stringify(this.restaurants));
    })
  }

  visitMenuPage(index){
    console.log("The restaurant selected index is "+JSON.stringify(index));
    console.log("The restaurant selected is is "+JSON.stringify(this.restaurants[index]));
    this.dataService.user.selectedRestaurantId=this.restaurants[index].id;
    console.log("The selected restaurant id is "+this.dataService.user.selectedRestaurantId);
    this.router.navigate(['/menupage']);
  }

  ngOnInit() {
    this.auth.isUserLoggin().then(response=>{
      if(response){
        this.isLoggedIn=true;
      }
    });
  }

}
