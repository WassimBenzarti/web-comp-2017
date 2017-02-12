import {Component, OnInit, Input, HostBinding, ElementRef} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  moduleId:module.id,
  selector: 'fade-anim',
  templateUrl: './fade-anim.component.html',
  styleUrls: ['./fade-anim.component.css']
})
export class FadeAnimComponent implements OnInit {

  @Input('style') customStyle:string ="";
  @Input() private delay;

  @HostBinding('class.visible') visible:boolean = false;

  private tag:HTMLElement;


  constructor(tag:ElementRef, private sanitizer:DomSanitizer) {
    this.tag = tag.nativeElement;
  }

  ngOnInit() {

  }

  getStyle(){
    let style = this.customStyle;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  ngAfterViewInit(){

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
