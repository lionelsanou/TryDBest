import { Restaurant } from './restaurant';

export class User {
    public id:string
    public firstname?: string
    public lastname?: string
    public email:string
    public profilePicture?:string
    public isRestaurantOwnser?:Boolean
    public restaurants?: Restaurant[]
    constructor(){
       
    }

}