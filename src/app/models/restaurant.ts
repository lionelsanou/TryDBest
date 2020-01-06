import { TestingEvent } from './testingEvent';

export class Restaurant{
  id:string;
  addressLine1:string;
  addressLine2:string;
  city: string;
  state:string;
  zipcode:string;
  country:string;
  public testingEvents?: [TestingEvent]
}