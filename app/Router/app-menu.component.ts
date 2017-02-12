import {Component, OnInit} from '@angular/core';
import {LoadedPageService} from "../shared/loading-component/loaded-page.service";
import {Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";
@Component({
  moduleId:module.id,
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']

})
export class AppMenuComponent  implements OnInit {
  pages=[];
  homePages=[
    {title:'Home',link:'home'},
    {title:'Connect',link:'dashboard'},
    {title:'Join us',link:'signup'}

  ];

  dashboardPages = [
    {title:'Home',link:'/dashboard/home'},
    {title:'Profile',link:'/dashboard/profile'},
    {title:'Post Complain',link:'/dashboard/publish'}


  ]

  private isloaded;

  constructor(private loadedPage:LoadedPageService,private router:Router) {
    this.loadedPage.loadedStream.subscribe(event => this.setLoaded(event));
    this.router.events.subscribe((event:RouterEvent) => {
      // You only receive NavigationStart events
      //this.startLoading();
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event:RouterEvent){
    if(event instanceof NavigationEnd){
      if(event.url.indexOf('/dashboard') >=0){
        this.pages = this.dashboardPages
      }else{
        this.pages = this.homePages
      }
    }
  }

  setLoaded(b:boolean){this.isloaded=b}

  ngOnInit() {
  }

}
