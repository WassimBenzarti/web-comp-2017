import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {UserSettingService} from "../UserSettings/user-settings.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private userSettingService:UserSettingService,private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.userSettingService.logged){
      return true;
    }else{
      let url: string = state.url;
      this.userSettingService.redirectUrl = url;
      setTimeout(()=>{this.router.navigate(['/login'])},1000);
      return false;
    }
    //this.userSettingService.login('test','password').subscribe((result)=>console.log(result));

    //return true;
  }

  logout(): void {
    this.userSettingService.logOut();
  }
}
