import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";

@Injectable()
export class ProfileService {

  url = "10.128.3.69/myapp/api/citoyen/...";

  constructor(private http:Http) { }

  modify(pseudo:string,pass:string):Observable<any>{
    return this.http.post(this.url,{pseudo:pseudo,pass:pass})
      .map(this.extract)
      .catch(this.throwError);

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
