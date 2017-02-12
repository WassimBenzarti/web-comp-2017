import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detail;
  private num:number = 1;
  constructor() {
    this.num = Math.floor(Math.random()*5) + 1;

  }

  ngOnInit() {
  }

  randImg(){

    return "/assets/"+this.num+".jpg";

  }

}
