import { Component, OnInit } from '@angular/core';
import { tweet } from '../model/tweet.model';
import { user } from '../model/user.model';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInfo = new user("chikerita", "chikeritapwd");
  listaTweets: [];
  tweets;
  newTweetText: string;
  constructor(private tweetsService: TweetsService) {
    this.userInfo.id = 2;
  }
  getTweets() {
    this.tweetsService.getUserTweets(this.userInfo).subscribe(resp => {
      console.log(resp.body);
      const keys = resp.headers.keys();
      let headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      this.tweets = resp.body;
      this.listaTweets = this.tweets.data;
      console.log(this.listaTweets);
    });
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
  }

  ngOnInit(): void {
    this.getTweets();
  }

}
