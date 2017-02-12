import {AnimationEntryMetadata, trigger, transition, animate, style} from "@angular/core";



export const defaultAnimation ={
  fadeInOut: trigger('fadeInOut',[
                transition(':enter',[style({opacity:0}),animate(400)]),
                transition(':leave',animate(400,style({opacity:0})))
              ])

}