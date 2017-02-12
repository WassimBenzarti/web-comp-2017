import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppMenuComponent } from './app-menu.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {LoadingPage} from "../shared/loading-component/LoadingPage";
import {SignUpComponent} from "../Sign-up/sign-up.component";
import {AuthGuard as AuthGuardDashboard} from "../Dashboard/auth-guard.service";
import {LoginComponent} from "../Login/login.component";

export const appRoutes:Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:'app/Home/home.module#HomeModule',resolve:{loading:LoadingPage}},
  {path:'dashboard',canActivate:[AuthGuardDashboard],loadChildren:'app/Dashboard/dashboard.module#DashboardModule',resolve:{loading:LoadingPage}},
  {path:'signup',component:SignUpComponent,resolve:{loading:LoadingPage}},
  {path:'login',component:LoginComponent,resolve:{loading:LoadingPage}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    SharedModule

  ],
  declarations: [AppMenuComponent],
  providers:[LoadingPage,AuthGuardDashboard],
  exports:[RouterModule, AppMenuComponent]
})
export class MyRouterModule { }
