import { Component, OnInit } from '@angular/core';
import {ProfileService} from "./profile.service";
import {UserSettingService} from "../../UserSettings/user-settings.service";

@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private pseudo:string;
  private pass:string;
  private changed:boolean= false;
  private modifyPass : boolean=false;
  constructor(private profileService:ProfileService,userSettingService:UserSettingService) { }

  ngOnInit() {

  }


  changePassword(){
    this.changed = true;
    this.modifyPass = !this.modifyPass;

  }

  saveProfile(){
    if(!this.modifyPass)this.pass = "";
    this.profileService.modify(this.pseudo,this.pass)
  }

}
