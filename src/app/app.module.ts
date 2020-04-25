import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from "@angular/common/http";

/**
 * ANGULAR MATERIAL
 */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * SERVICIOS
 */
import {NavPageService} from './services/navPage.service';
import {TweetsService} from './services/tweets.service';
import {UserService} from './services/user.service';
import {FollowersService} from './services/followers.service';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { WallComponent} from './wall/wall.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LogInComponent,
    RegisterComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [TweetsService,
    UserService,
    FollowersService,
    NavPageService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
