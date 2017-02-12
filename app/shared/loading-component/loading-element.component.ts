import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/core";

@Component({
  moduleId:module.id,
  selector: 'loading-element',
  templateUrl: './loading-element.component.html',
  styleUrls: ['./loading-element.component.css'],
  animations:[
    trigger('fadeInOut',[
      state('in',style({opacity:1})),
      transition(':enter',[style({opacity:0}),animate('.6s')]),
      transition(':leave',[animate('.6s',style({opacity:0}))])
    ])
  ]
})
export class LoadingElementComponent implements OnInit {


  public static num:number = 0;

  @Input() private loading:boolean = true;
  @Output() loadingChange:EventEmitter<boolean> = new EventEmitter();
  private visiblePage:boolean=false;
  setLoading(b:boolean){
    if(b){
      this.visiblePage =!b;
      setTimeout(()=>{this.loading = b;},600);
    }else{
      this.loading = b;
      setTimeout(()=>{this.visiblePage =!b;},600);
    }
    this.loadingChange.emit(b);
  }


  constructor() { }


  ngOnInit() {

  }





}
