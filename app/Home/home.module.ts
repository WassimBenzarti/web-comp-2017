import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HomeComponent } from './home.component';
import {Router, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

export const routes= [
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes),
    CommonModule,HttpModule, FormsModule,SharedModule
  ],
  declarations: [HomeComponent],
  exports:[RouterModule]
})
export class HomeModule { }
