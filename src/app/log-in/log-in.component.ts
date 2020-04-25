import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../model/user.model';

@Component({
  selector: '.app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username;
  password;
  userinfo = new user(this.username,this.password);
  constructor(private userService: UserService, ) { 
    //this.getAuth();
  }

  ngOnInit(): void {
  }


  getAuth(){
    
    console.log(this.username);
    console.log(this.password);
    this.userinfo = new user(this.username,this.password);
    this.userService.authenticateUser(this.userinfo).subscribe(resp => {

      console.log(resp.body);
      let res = resp.body ;
      if(res){
         this.userService.findUserByUsername(this.userinfo).subscribe(resp =>{
           
        });
      }
    }
    )};

    

}
