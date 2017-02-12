import { Component, OnInit } from '@angular/core';
import {LoadingPage} from "../shared/loading-component/LoadingPage";

@Component({
  moduleId:module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private isSearching:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
