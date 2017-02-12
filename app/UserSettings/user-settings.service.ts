import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserSettingService {

  logged:boolean = false; // TODO: to false
  pseudo:string="";
  email:string="";
  id:string="";
  redirectUrl:string = "";

  constructor(private http:Http) { }

  login(email,pass){
    let info = this.http.post('http://10.128.3.69/myapp/api/citoyen/connect',
      {email:email,pwd:pass})
      .map((data)=>{
        let info = data.json();
        if(info['error'] == "0"){
          this.logged = true;
          this.email = info['email'];
          this.id = info['id'];

        }else{
          return false;
        }
      })
      .catch(this.throwError);

    return info;

  }

  logOut(){
    this.logged = false;
    this.email = "";
  }

  extract(data:Response){
    let body = data.json();
    return body || {};
  }


  throwError(err){
    console.error('MY ERROR:',err);
    return Observable.throw(err);
  }

}
