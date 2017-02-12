import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[v-center]'
})
export class VCenterDirective {

  constructor(private elm: ElementRef) {
    elm.nativeElement.className+= " v-center";


  }



}
