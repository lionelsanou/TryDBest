import { TestingEvent } from './testingEvent';
import { RestaurantMenu } from './RestaurantMenu';

export class Restaurant{
  id:string;
  addressLine1:string;
  addressLine2:string;
  city: string;
  state:string;
  zipcode:string;
  country:string;
  websiteAddress:string
  restaurantName:string
  phoneNumber:string
  public testingEvents?: TestingEvent[]
  restaurantMenus:RestaurantMenu[]
}