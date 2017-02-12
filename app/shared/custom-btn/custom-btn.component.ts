import {
  Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition,
  animate
} from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.css'],
  animations:[
    trigger('fadeInOut',[
      state('*',style({opacity:1})),
      transition(':enter',[style({opacity:0}),animate('.3s')]),
      transition(':leave',[animate('.3s',style({opacity:0}))])
    ])
  ]
})
export class CustomBtnComponent implements OnInit {

  @Input() text = "";
  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicked($event){
    this.clickEvent.emit($event);
  }

}
