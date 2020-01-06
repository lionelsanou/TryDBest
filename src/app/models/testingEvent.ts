import { EventMenu } from './eventMenu';

export class TestingEvent {
  id:string;
  testingEventName:string;
  eventStartDate: string;
  eventStartTime:string;
  eventEndDate:string;
  eventEndTime:string;
  eventMenus:[EventMenu]
  constructor(){}
}