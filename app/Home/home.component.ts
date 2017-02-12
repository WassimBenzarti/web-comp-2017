import {Component, OnInit, HostBinding, ElementRef, ViewChildren, Optional} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import {LoadedPageService} from "../shared/loading-component/loaded-page.service";

@Component({
  moduleId:module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loadedPage:LoadedPageService,private router:Router) {
    //this.loadedPage.loadedStream.subscribe(event => this.setLoaded(event));

  }

  ngOnInit() {
  }

  goToSignUp(){
    this.router.navigate(['signup']);
  }

  ngAfterViewInit(){
  }


}
