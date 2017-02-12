import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {DetailService} from "../publish-post/details.service";

@Component({
  moduleId:module.id,
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  animations:[
    trigger('postsAnim',[
      state('*',style({opacity:1,transform:'translate(0,0)'})),
      transition(':enter',[style({opacity:0,transform:'translate(0,10px)'}),animate('.4s')]),
      transition(':leave',[animate('.4s',style({opacity:0,transform:'translate(0,10px)'}))])
    ])
  ]
})
export class PostsListComponent implements OnInit {
  details = [];
  detailsBuffer = [];
  constructor(private detailService:DetailService) {
    this.getData();

  }

  getData(){
    this.detailService.getDetails().subscribe(data=>{
      this.detailsBuffer = data;
      this.loadDetails();
    },()=>console.warn('My Error'));

  }

  loadDetails(){
    this.details = [];
    for(let i =0 ;i < this.detailsBuffer.length;i++){
      setTimeout(()=>this.details.push(this.detailsBuffer[i]),i*100)
    }
  }


  ngOnInit() {
  }

}
