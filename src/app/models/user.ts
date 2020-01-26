import { Restaurant } from './restaurant';
import { RestaurantMenu } from './RestaurantMenu';

export class User {
    public id:string
    public firstname?: string
    public lastname?: string
    public email:string
    public profilePicture?:string
    public isRestaurantOwnser?:Boolean
    public restaurants?: Restaurant[]
    public selectedRestaurantId?:string;
    public cartItems?:RestaurantMenu[]=[];
    constructor(){
       
    }

}