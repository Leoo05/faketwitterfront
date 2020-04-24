import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userinfo = new user("","");
  constructor(private userService: UserService, ) { 
    //this.getAuth();
  }

  ngOnInit(): void {
  }

  
}
