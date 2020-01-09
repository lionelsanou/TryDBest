
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
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  restaurants:any=[];
  isLoggedIn:boolean;
  constructor() { 

    const oneTodo = API.graphql(graphqlOperation(queries.listRestaurants));
    oneTodo.then(response=>{
      console.log(JSON.stringify(response));
      for(let myRestaurant of response.data.listRestaurants.items){
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
          testingEvents:testings,
          
          
        });
      }
      console.log("The Restaurant info is "+JSON.stringify(this.restaurants));
    })
  }

  ngOnInit() {
  }

}
