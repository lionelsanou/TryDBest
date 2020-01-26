import { PipeTransform, Pipe } from '@angular/core';
import { Restaurant } from './restaurant';

@Pipe({
    name:'restaurantFilter'
})
export class RestaurantFilter implements PipeTransform{
    restaurantss:any[];
    transform(restaurants:Restaurant[],searchTerm:string){
       //console.log("The restaurnt is"+JSON.stringify(restaurants));
       console.log("The search term is"+JSON.stringify(searchTerm));
        if(!restaurants ||!searchTerm){
            console.log("invalid");
            return restaurants;
        }
        //this.restaurantss= 
        return restaurants.filter(restaurant=>
            //console.log("The restaurant info is "+JSON.stringify(restaurant));
            //console.log("The search result is "+( restaurant.restaurantName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())));
            restaurant.restaurantName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1
        );
        //console.log("---------------"+JSON.stringify(this.restaurantss));
    }
}