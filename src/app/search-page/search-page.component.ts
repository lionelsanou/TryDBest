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

  constructor() { }

  ngOnInit() {
  }

}
