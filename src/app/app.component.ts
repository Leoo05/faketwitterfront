import { Component } from '@angular/core';

import { tweet } from './model/tweet.model';
import { user } from './model/user.model';
import {TweetsService} from './services/tweets.service';


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

  constructor(private tweetsService : TweetsService  ) {

  }

  getTweets(){
    this.tweetsService.getUserTweets(){      
    }
  }

  publicar() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let newTweet = {
      user: this.newTweetUser,
      text: this.newTweetText,
      date: dd + '/' + mm + '/' + yyyy,
      likes: 0
    }
    this.listaTweets.push(newTweet);
  }

}
