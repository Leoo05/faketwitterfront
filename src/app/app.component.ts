import { Component } from '@angular/core';

import { tweet } from './model/tweet.model';
import { user } from './model/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'faketwitterfront';
  listaTweets = [];
  newTweetText: string;
  newTweetUser: string;

  constructor() {

  }

}
