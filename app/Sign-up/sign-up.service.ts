import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import "../rxjs-operators";
import {Observable} from "rxjs/Observable";
@Injectable()
export class SignUpService {
  testData:any = {success:1};
  constructor(private http:Http) { }

  signUp(pseudo,email, pass):Observable<any>{
    return this.http.post('http://10.128.3.69/myapp/api/citoyen',{email:email,pseudo:pseudo,pwd:pass})
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
