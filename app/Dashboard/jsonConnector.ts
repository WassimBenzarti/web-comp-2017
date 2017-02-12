import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
export class jsonConnector{

  extract(data:Response){
    let body = data.json();
    return body || {};
  }


  throwError(err){
    console.error('MY ERROR:',err);
    return Observable.throw(err);
  }

}