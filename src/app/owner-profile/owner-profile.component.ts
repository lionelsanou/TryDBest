import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/DataService';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import * as moment from 'moment';
import {User} from 'src/app/models/user';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'src/graphql/mutations';


@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss']
})
export class OwnerProfileComponent implements OnInit {
  usStates:any;
  form: FormGroup;
  options: any = {format: 'DD/MM/YYYY'};
  isLoggedIn: boolean = true;
  user:User;
  selectedStartDate:string;
  selectedStartTime:string;
  selectedMoment1:any;
  selectedMoment2:any;
  eventName:string;
  menuPrice:number;
  selectedMoments=[
    new Date(2018, 1, 12, 10, 30),
    new Date(2018, 3, 21, 20, 30)
];
showPhoto: boolean;
showPhoto2: boolean;
showPhoto3: boolean;
noAddress:boolean=true;
imageUrl:string;
imageUrl2:string;
imageUrl3:string;
restaurantIndex:number=20;
image2selection:boolean=false;
  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(['',Validators.required]),
    lastname: new FormControl(['',Validators.required]),
    profilepic: new FormControl(),
    restaurantOwnwer:new FormControl('no')
  });
  restaurantForm:FormGroup=new FormGroup({
    addressLine:new FormControl(),
    addressLine2:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    country:new FormControl()
  });
  constructor(public dataService:DataService,fb: FormBuilder) {
      this.form = fb.group({
      date: [moment('2015-11-18T00:00Z'), Validators.required]
    }); 
  }
  addImage2(){
    this.image2selection=true;
  }
 async  saveEventDate(){
    console.log("Lets save the event date----------------- "+JSON.stringify(this.selectedMoment1));
    console.log("Lets save the event time----------------- "+JSON.stringify(this.selectedMoment2));
    const eventDate= {
      //id:this.user.id,
      testingEventRestaurantId:this.user.id,
      testingEventName:this.eventName,
      eventStartDate:this.selectedMoment1,
      eventEndDate:this.selectedMoment2
    }
    console.log("Let's create a new event date and time "+JSON.stringify(eventDate));
    let user=await API.graphql(graphqlOperation(mutations.createTestingEvent, {input:eventDate}));

  }
  async onImageUploaded(e) {
    const imageUrl = e.key;
    console.log("The uploaded photo URL is "+JSON.stringify(imageUrl));
    const eventMenu={
      //id:this.user.id,
      eventMenuTestingEventId:this.user.restaurants[this.restaurantIndex].testingEvents[0].id,
      menuPicture:imageUrl,
      menuPrice:this.menuPrice
    }
    console.log("The uploaded tasting menu is "+JSON.stringify(imageUrl));
    let  user = await API.graphql(graphqlOperation(mutations.createEventMenu, {input:eventMenu}));
    this.showPhoto=true;
    
    }
    
  
   async saveFirstNameLastName(){
     console.log("the user first name is "+this.userForm.get('firstname').value);
     console.log("the user last name is "+this.userForm.get('lastname').value);
     const userFirstNameLastName = {
      id:this.user.id,
      firstname: this.userForm.get('firstname').value,
      lastname: this.userForm.get('lastname').value
  };
  let user="";
    if(this.user.firstname){
      console.log("Existing User");
       user = await API.graphql(graphqlOperation(mutations.updateUser, {input:userFirstNameLastName}));
    }else{
      console.log("Let's create a new user");
      user = await API.graphql(graphqlOperation(mutations.createUser, {input:userFirstNameLastName}));
    }
    
     console.log("the user has been successfully created "+JSON.stringify(user));
     //if data is save successfully lets add it to the data service
     this.dataService.getUser().firstname=this.userForm.get('firstname').value;
     this.dataService.getUser().lastname=this.userForm.get('lastname').value;
    }

    async saveAddress(){
     console.log("the user addressLine1 is "+this.restaurantForm.get('addressLine').value);
     console.log("the user addressLine2 is "+this. restaurantForm.get('addressLine2').value);
     const address = {
      //id:this.user.id,
      restaurantUserId:this.user.id,
        addressLine1: this.restaurantForm.get('addressLine').value,
        
        city: this.restaurantForm.get('city').value,
        state: this.restaurantForm.get('state').value,
        zipcode: this.restaurantForm.get('zipCode').value,
        country: "US"
    
    }
    const result = await API.graphql(graphqlOperation(mutations.createRestaurant, {input:address}));
    console.log("the user address has been successfully created "+JSON.stringify(address))
    this.dataService.saveAddress(address);
    //location.reload();
    }

    reset() {
      this.form.controls['date'].reset();
    }

    editPhoto(){
      this.showPhoto=false;
    }

    addAnotherAddress(){
      console.log("adding another address");
      this.restaurantForm.reset();
      this.selectedStartDate="";
      this.selectedStartTime="";
      this.selectedMoment1="";
      this.selectedMoment2="";
      this.eventName="";
      this.imageUrl="";
      this.showPhoto=false;
    }
    addressDetails(index){
      console.log("Show address Details"+index);
      this.restaurantIndex=index;
      this.userForm=new FormGroup({firstname:new FormControl(this.user.firstname),lastname:new FormControl(this.user.lastname),profilepic:new FormControl(this.user.profilePicture)});
      this.restaurantForm=new FormGroup({addressLine:new FormControl(this.user.restaurants[index].addressLine1),addressLine2:new FormControl(this.user.restaurants[index].addressLine2),city:new FormControl(this.user.restaurants[index].city),state:new FormControl(this.user.restaurants[index].state),
      zipCode:new FormControl(this.user.restaurants[index].zipcode)
      });
      console.log("User detail is "+JSON.stringify(this.user.restaurants[index]));
      if(this.user.restaurants[index].testingEvents[0]){
      if(this.user.restaurants[index].testingEvents[0].testingEventName){
        
    
    this.eventName=this.user.restaurants[index].testingEvents[0].testingEventName;
        console.log("Yooooo "+this.user.restaurants[index].testingEvents[0].eventEndDate);
        this.selectedMoment2=this.user.restaurants[index].testingEvents[0].eventEndDate;
        this.selectedMoment1=this.user.restaurants[index].testingEvents[0].eventStartDate;
        console.log(" il es la il est la "+JSON.stringify(this.user.restaurants[index].testingEvents[0].eventMenus));
        if(this.user.restaurants[index].testingEvents[0].eventMenus[0].menuPicture){
          this.showPhoto=true;
          this.imageUrl=this.user.restaurants[index].testingEvents[0].eventMenus[0].menuPicture;
          this.menuPrice=parseInt(this.user.restaurants[index].testingEvents[0].eventMenus[0].menuPrice);
          console.log(" the user event URL is "+this.imageUrl);
          console.log(" the user event Menu Price is "+this.menuPrice);
        }
      }else if (this.user.restaurants[index].testingEvents[0].eventEndDate){
        this.selectedMoment2=this.user.restaurants[index].testingEvents[0].eventEndDate;
        console.log("Event End time is "+this.selectedMoment2);
      }else if (this.user.restaurants[index].testingEvents[0].eventStartDate){
        this.selectedMoment1=this.user.restaurants[index].testingEvents[0].eventStartDate;
        console.log("Event Start time is "+this.selectedMoment1);
      }
    }else{
      this.eventName="";
      this.selectedMoment2="";
      this.selectedMoment1="";
      this.showPhoto=false;
      this.imageUrl="";
    }
    }

  ngOnInit() {
    this.usStates= [
      { name: 'ALABAMA', abbreviation: 'AL'},
      { name: 'ALASKA', abbreviation: 'AK'},
      { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
      { name: 'ARIZONA', abbreviation: 'AZ'},
      { name: 'ARKANSAS', abbreviation: 'AR'},
      { name: 'CALIFORNIA', abbreviation: 'CA'},
      { name: 'COLORADO', abbreviation: 'CO'},
      { name: 'CONNECTICUT', abbreviation: 'CT'},
      { name: 'DELAWARE', abbreviation: 'DE'},
      { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
      { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
      { name: 'FLORIDA', abbreviation: 'FL'},
      { name: 'GEORGIA', abbreviation: 'GA'},
      { name: 'GUAM', abbreviation: 'GU'},
      { name: 'HAWAII', abbreviation: 'HI'},
      { name: 'IDAHO', abbreviation: 'ID'},
      { name: 'ILLINOIS', abbreviation: 'IL'},
      { name: 'INDIANA', abbreviation: 'IN'},
      { name: 'IOWA', abbreviation: 'IA'},
      { name: 'KANSAS', abbreviation: 'KS'},
      { name: 'KENTUCKY', abbreviation: 'KY'},
      { name: 'LOUISIANA', abbreviation: 'LA'},
      { name: 'MAINE', abbreviation: 'ME'},
      { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
      { name: 'MARYLAND', abbreviation: 'MD'},
      { name: 'MASSACHUSETTS', abbreviation: 'MA'},
      { name: 'MICHIGAN', abbreviation: 'MI'},
      { name: 'MINNESOTA', abbreviation: 'MN'},
      { name: 'MISSISSIPPI', abbreviation: 'MS'},
      { name: 'MISSOURI', abbreviation: 'MO'},
      { name: 'MONTANA', abbreviation: 'MT'},
      { name: 'NEBRASKA', abbreviation: 'NE'},
      { name: 'NEVADA', abbreviation: 'NV'},
      { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
      { name: 'NEW JERSEY', abbreviation: 'NJ'},
      { name: 'NEW MEXICO', abbreviation: 'NM'},
      { name: 'NEW YORK', abbreviation: 'NY'},
      { name: 'NORTH CAROLINA', abbreviation: 'NC'},
      { name: 'NORTH DAKOTA', abbreviation: 'ND'},
      { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
      { name: 'OHIO', abbreviation: 'OH'},
      { name: 'OKLAHOMA', abbreviation: 'OK'},
      { name: 'OREGON', abbreviation: 'OR'},
      { name: 'PALAU', abbreviation: 'PW'},
      { name: 'PENNSYLVANIA', abbreviation: 'PA'},
      { name: 'PUERTO RICO', abbreviation: 'PR'},
      { name: 'RHODE ISLAND', abbreviation: 'RI'},
      { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
      { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
      { name: 'TENNESSEE', abbreviation: 'TN'},
      { name: 'TEXAS', abbreviation: 'TX'},
      { name: 'UTAH', abbreviation: 'UT'},
      { name: 'VERMONT', abbreviation: 'VT'},
      { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
      { name: 'VIRGINIA', abbreviation: 'VA'},
      { name: 'WASHINGTON', abbreviation: 'WA'},
      { name: 'WEST VIRGINIA', abbreviation: 'WV'},
      { name: 'WISCONSIN', abbreviation: 'WI'},
      { name: 'WYOMING', abbreviation: 'WY' }
  ];
    this.restaurantIndex=0;
    console.log("OwnerComponent - - The user data is "+JSON.stringify(this.dataService.getUser()));
    this.user=this.dataService.getUser();
    if(this.user.restaurants[0].addressLine1!=""){
      this.noAddress=false;
    }
    this.userForm=new FormGroup({firstname:new FormControl(this.user.firstname),lastname:new FormControl(this.user.lastname),profilepic:new FormControl(this.user.profilePicture)});
    this.restaurantForm=new FormGroup({addressLine:new FormControl(this.user.restaurants[0].addressLine1),addressLine2:new FormControl(this.user.restaurants[0].addressLine2),city:new FormControl(this.user.restaurants[0].city),state:new FormControl(this.user.restaurants[0].state),
    zipCode:new FormControl(this.user.restaurants[0].zipcode)
    });
    if(this.user.restaurants[0].testingEvents[0]){
    if(this.user.restaurants[0].testingEvents[0].testingEventName){
      
 
  this.eventName=this.user.restaurants[0].testingEvents[0].testingEventName;
      console.log("Yooooo "+this.user.restaurants[0].testingEvents[0].eventEndDate);
      this.selectedMoment2=this.user.restaurants[0].testingEvents[0].eventEndDate;
      this.selectedMoment1=this.user.restaurants[0].testingEvents[0].eventStartDate;
      console.log(" il es la il est la "+JSON.stringify(this.user.restaurants[0].testingEvents[0].eventMenus));
      if(this.user.restaurants[0].testingEvents[0].eventMenus[0].menuPicture){
        this.showPhoto=true;
        this.imageUrl=this.user.restaurants[0].testingEvents[0].eventMenus[0].menuPicture;
        this.menuPrice=parseInt(this.user.restaurants[0].testingEvents[0].eventMenus[0].menuPrice);
        console.log(" the user event URL is "+this.imageUrl);
      }
    }else if (this.user.restaurants[0].testingEvents[0].eventEndDate){
      this.selectedMoment2=this.user.restaurants[0].testingEvents[0].eventEndDate;
      console.log("Event End time is "+this.selectedMoment2);
    }else if (this.user.restaurants[0].testingEvents[0].eventStartDate){
      this.selectedMoment1=this.user.restaurants[0].testingEvents[0].eventStartDate;
      console.log("Event Start time is "+this.selectedMoment1);
    }
  }
}

}
