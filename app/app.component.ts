import {Component, OnInit, trigger, transition, animate, style, state} from "@angular/core";
import "./rxjs-operators";
import {LoadingPage} from "./shared/loading-component/LoadingPage";
import {Router} from "@angular/router";
import {defaultAnimation} from "./shared/shared.animations";
import {LoadedPageService} from "./shared/loading-component/loaded-page.service";


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  animations:[
    trigger('introFadeOut',[
      state('*',style({transform:'translate(-50%,-50%)',opacity:1})),
      transition(':leave',[animate('.5s ease-in-out',style({transform:'translate(-50%,-90%)',opacity:0}))])
    ]),
    defaultAnimation.fadeInOut
  ],

})
export class AppComponent extends LoadingPage implements OnInit {



  constructor(router:Router,loadedPage:LoadedPageService){
    super(router,loadedPage);

  }
  
  ngOnInit(){
  }


  ngAfterContentInit(){

  }

  loadingDone(){

  }

  // sendEventLoading(b:boolean = !this.isLoading){
  //   this.isLoading = b;
  //
  // }
  
  
  
}
