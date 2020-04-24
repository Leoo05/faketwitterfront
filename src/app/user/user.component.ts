import { Component, OnInit } from '@angular/core';
import { tweet } from '../model/tweet.model';
import { user } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInfo;
  listaTweets;
  newTweetText: string;
  constructor() {
    
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
