import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "../../rxjs-operators"
import {jsonConnector} from "../jsonConnector";

@Injectable()
export class SearchService extends jsonConnector{

  constructor(private http:Http) {super();  }

  products = [];

  getProducts(key?:string){
    let info = this.http.get('http://10.128.3.69/myapp/api/produit')
      .map((data)=>{this.products = data.json();return this.find(key)})
      .catch(this.throwError);

    return info;
  }



  extract(data:any){
    let body = data.json();
    this.products = body;
    return body;
  }


  find(key:string){
    let result = [];
    for(var i=0;i<this.products.length ;i++){
      if(this.products[i].libelle.toLowerCase().indexOf(key.toLowerCase()) >= 0){
        console.log(this.products[i].libelle);
        result.push(this.products[i].libelle);
      }
    }
    return result;
  }

}
