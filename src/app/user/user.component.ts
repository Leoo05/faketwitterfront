import { Component, OnInit } from '@angular/core';
import { tweet } from '../model/tweet.model';
import { user } from '../model/user.model';
import {TweetsService} from '../services/tweets.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInfo = new user("chikerita", "chikeritapwd");
  listaTweets;
  newTweetText: string;
  constructor(private tweetsService : TweetsService) {
    this.userInfo.id = 2;
    this.listaTweets = tweetsService.getUserTweets(this.userInfo);
  }

  publicar() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let newTweet = {
      user: this.userInfo.user,
      text: this.newTweetText,
      date: dd + '/' + mm + '/' + yyyy,
      likes: 0
    }
    this.listaTweets.push(newTweet);
  }

  ngOnInit(): void { }

}
