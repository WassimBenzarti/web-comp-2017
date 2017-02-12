import { Injectable } from '@angular/core';
import {Http, Jsonp, Headers} from "@angular/http";
import "../../rxjs-operators"
import {jsonConnector} from "../jsonConnector";

@Injectable()
export class DetailService extends jsonConnector{

  constructor(private http:Http) {super();}


  getDetails(){
    return this.http.get('http://10.128.3.69/myapp/api/details')
      .map(this.extract)
      .catch(this.throwError);

  }

  getPlaces(key){
    let headers = new Headers({'X-Mashape-Key':'Ns0SkjyRRomshq3PgEnGoz2Zkc71p1CYnWajsnphGctvrGt46W'});
    headers.append( 'Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.request('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+key+'&country=tunisia&types=(cities)&components=country:tn&key=AIzaSyAYAjxgdPgowSgjfAgBxLpOs3YtegB7a2w',{method:'Get',headers:headers})
      .map(this.extract)
      .catch(this.throwError);
  }

  getDetailsPlaces(place:string){
    return this.http.get('http://10.128.3.69/myapp/api/details')
      .map((data)=>{return this.findPlace(place,data.json())})
      .catch(this.throwError);
  }

  findPlace(place:string, data:any){
    let result = [];
    for(var i=0;i<data.length ;i++){
      if(data[i].localisation.toLowerCase().indexOf(place.toLowerCase()) >= 0 || place.toLowerCase().indexOf(data[i].localisation.toLowerCase()) >= 0){
        console.log(data[i].localisation);
        result.push(data[i].localisation);
      }
    }
    return result;
  }

}
