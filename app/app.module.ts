import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';


import {MyRouterModule} from "./Router/myrouter.module";
import {SharedModule} from "./shared/shared.module";
import { SignUpComponent } from './Sign-up/sign-up.component';
import {SignUpService} from "./Sign-up/sign-up.service";
import {UserSettingService} from "./UserSettings/user-settings.service";
import {LoginComponent} from "./Login/login.component";
import {LoginService} from "./Login/login.service";


@NgModule({
  imports:      [ MyRouterModule, BrowserModule, HttpModule, FormsModule, SharedModule.forRoot() ],
  declarations: [ AppComponent, SignUpComponent, LoginComponent ],
  providers:    [ SignUpService, LoginService, UserSettingService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
