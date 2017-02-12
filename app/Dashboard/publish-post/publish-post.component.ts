import { Component, OnInit } from '@angular/core';
import {DetailService} from "./details.service";
import {SearchService} from "../search/search.service";

@Component({
  moduleId:module.id,
  selector: 'publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.css']
})
export class PublishPostComponent implements OnInit {
  products = [];
  keyword:string;
  constructor(private searchService:SearchService) {

    this.getData();

  }

  ngOnInit() {
  }

  getData(){
    this.searchService.getProducts(this.keyword).subscribe(data=>{this.products = data;console.log(data);},()=>console.warn('My Error'));
  }


}
