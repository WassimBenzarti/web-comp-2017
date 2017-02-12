import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {UserSettingService} from "../UserSettings/user-settings.service";


@Component({
  moduleId:module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:string = "";
  private pass:string= "";
  constructor(private userSettingService:UserSettingService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email.length && this.pass.length){
      this.userSettingService.login(this.email,this.pass)
        .subscribe((result)=>{console.log(result);this.goToDashboard()},
          (err) => console.error(err));

    }
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
