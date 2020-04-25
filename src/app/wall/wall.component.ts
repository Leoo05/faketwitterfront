import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../services/tweets.service';
import { tweet } from '../model/tweet.model';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  listtweets
  tweets: tweet[];

  constructor(private tweetsService: TweetsService) { 
  
      this.getTweets();
  }
  async getTweets(){
    this.tweetsService.getAllTweets().subscribe(resp => {
      resp.body
      const keys = resp.headers.keys();
      let headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      this.listtweets = resp.body;
      this.tweets = this.listtweets.data;
    })
  }
  ngOnInit(): void {
  }

}
