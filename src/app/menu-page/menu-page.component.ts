import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {DataService} from 'src/DataService';


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  isLoggedIn:boolean;
  cartItems:Restaurant[]=[];
  total:number=0;
  handler:any = null;

  public restaurantInfo:any;
  constructor(private auth:AuthService,public dataService:DataService) {
    const oneTodo = API.graphql(graphqlOperation(queries.getRestaurant,{id:this.dataService.user.selectedRestaurantId}));
    oneTodo.then(response=>{
      console.log("The restaurant details is "+JSON.stringify(response));
      this.restaurantInfo=response.data.getRestaurant;
    });

   }
   removeFromCart(i){
     console.log("Removing the  following menu index from the cart "+i);
     console.log("Removing the  following menu from the cart "+JSON.stringify(this.dataService.user.cartItems[i]));
    if (i!== -1) {
      this.total -=parseInt(<string>this.dataService.user.cartItems[i].menuPrice);
      this.dataService.user.cartItems.splice(i, 1);
      
    }
   }
   loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_live_YL2UFmwSqNHDSLlQQfP0Qe7a00oOoJTmEh',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

   addToCart(i){
     console.log("the index of the selected menu is "+i);
     console.log("the selected menu item is "+JSON.stringify(this.restaurantInfo.RestaurantMenus.items[i]));
      this.cartItems.push(this.restaurantInfo.RestaurantMenus.items[i]);
      this.dataService.user.cartItems.push(this.restaurantInfo.RestaurantMenus.items[i]);
      this.total +=parseInt(<string>this.dataService.user.cartItems[i].menuPrice);
      console.log("These are the items added to my cart "+JSON.stringify(this.cartItems));
    }

    pay() {    
 
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_live_YL2UFmwSqNHDSLlQQfP0Qe7a00oOoJTmEh',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Token Created!!');
        }
      });
   
      handler.open({
        name: 'TryDBest Payment Module',
        description: 'TryDBest',
        amount: this.total *100
      });
   
  }
  ngOnInit() {
    for(let i=0;i<this.dataService.user.cartItems.length;i++){
      this.total +=parseInt(<string>this.dataService.user.cartItems[i].menuPrice);
    }
    this.loadStripe();
    this.auth.isUserLoggin().then(response=>{
      if(response){
        this.isLoggedIn=true;
      }
    });
  }

}
