import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {SearchService} from "./search.service";
import {DetailService} from "../publish-post/details.service";

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private value:string="";
  cities = [];
  products = [];
  details =[];
  @Input('isEnabled') enabled=false;
  get isEnabled(){return this.enabled;}
  @Output()enabledChange = new EventEmitter();
  set isEnabled(b:boolean){
    this.enabled = b; this.enabledChange.emit(b);
  }

  constructor(private searchService:SearchService,private detailService:DetailService) {

    this.getData();
  }

  getData(){
    this.searchService.getProducts()
      .subscribe((products) => this.products = products,
        ()=>console.error('my ERROR'))
  }

  ngOnInit() {

  }

  search(){
    this.enabled = (this.value.length >0);
    this.cities = this.searchService.find(this.value);
    console.log(this.value);
    setTimeout((prev)=>{
      if(prev === this.value){
        this.detailService.getPlaces(this.value)
          .subscribe((data)=>this.cities = data,()=>console.error('my ERROR'));
      }
    },1000,this.value);
  }

  searchPlace(){
    this.enabled = (this.value.length >0);
    setTimeout((prev)=>{
      if(prev === this.value){
        this.detailService.getDetailsPlaces(this.value)
          .subscribe((data)=>this.products = data,()=>console.error('my ERROR'));
      }
    },1000,this.value);
  }


}
