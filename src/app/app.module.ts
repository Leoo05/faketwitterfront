import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from "@angular/common/http";

/**
 * SERVICIOS
 */
import {TweetsService} from './services/tweets.service';
import {UserService} from './services/user.service';
import {FollowersService} from './services/followers.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TweetsService,
    UserService,
    FollowersService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
