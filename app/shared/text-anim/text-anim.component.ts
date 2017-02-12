import {Component, OnInit, HostBinding, ElementRef, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  moduleId:module.id,
  selector: 'text-anim',
  templateUrl: './text-anim.component.html',
  styleUrls: ['./text-anim.component.css'],
})
export class TextAnimComponent implements OnInit {


  @Input('style') customStyle:string ="";
  @Input() private delay;
  @Input() private color ="";
  @Input() private size:number;

  @HostBinding('class.visible') visible:boolean = false;

  private tag:HTMLElement;
  @HostBinding('class.right') private right:boolean = false;
  @HostBinding('class.closed') private closed:boolean = false;


  constructor(tag:ElementRef, private sanitizer:DomSanitizer) {
    this.tag = tag.nativeElement;
  }

  ngOnInit() {

  }

  getStyle(){
    let style = this.customStyle;
    if(this.color){
      style = 'color:'+this.color+';'+style;
    }
    if(this.size){
      style = 'font-size:'+this.size+'px;'+style;
    }
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  ngAfterViewInit(){
    setTimeout(_=>{
      this.right = this.tag.hasAttribute('right');
      this.closed = this.tag.hasAttribute('closed');

    },1);

    let delay = 0;
    if(typeof this.delay != 'undefined'){
      delay =  400 *  this.delay;
    }

    setTimeout(()=>{this.visible = true;},delay);

  }

  ngOnDestroy(){
    this.visible=false;
  }

}
