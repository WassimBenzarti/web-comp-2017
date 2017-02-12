
import {ViewChild, Injectable} from "@angular/core";
import {LoadingElementComponent} from "./loading-element.component";
import {
  Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError, Resolve
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoadedPageService} from "./loaded-page.service";

@Injectable()
export class LoadingPage implements Resolve<any>{


  @ViewChild(LoadingElementComponent) loadingElm:LoadingElementComponent;
  isLoading:boolean;
  delay:number = 300;


  constructor(private router:Router,private loadedPage:LoadedPageService ){ }

  navigationInterceptor(event:RouterEvent){
    if(event instanceof NavigationStart){
      this.startLoading();
    }
    if(event instanceof NavigationEnd){
      setTimeout(()=>this.ready(),2000);
    }
    if(event instanceof NavigationCancel){
      this.ready();
    }
    if(event instanceof NavigationError){
      this.ready();alert('Please. Check you internet.')
    }
  }

  resolve():Observable<any>|Promise<any> {
    if(this.loadingElm) this.startLoading();
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('Hello I\'m observer');
        observer.complete();
      }, 1000);
    });
  }


  ngAfterViewInit(){
    if(this.loadingElm){
      this.router.events
        .subscribe((event:RouterEvent) => {
          // You only receive NavigationStart events
          //this.startLoading();
          this.navigationInterceptor(event);
        });
    }
  }

  ngOnDestroy(){

  }

  ready():void{
    this.isLoading = false;
    this.loadingElm.setLoading(false);
    setTimeout(()=>{
      this.loadedPage.submit(true);
      this.loadingDone();
    },this.delay);

  }

  startLoading():void{
    this.isLoading = true;
    this.loadingElm.setLoading(true);
    setTimeout(()=>{
      this.loadedPage.submit(false);
    },this.delay);
  }

  loadingDone(){

  }

}