import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { PostsListComponent } from './posts-list/posts-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PublishPostComponent } from './publish-post/publish-post.component';
import {SharedModule} from "../shared/shared.module";
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import {ProfileService} from "./profile/profile.service";
import {SearchService} from "./search/search.service";
import {DetailService} from "./publish-post/details.service";
import { DetailComponent } from './posts-list/detail/detail.component';
import { CommentComponent } from './posts-list/comment/comment.component';
import {JsonpModule} from "@angular/http";
import {LoadingPage} from "../shared/loading-component/LoadingPage";


// export const routes:Routes =[
//   {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'home',component:PostsListComponent,resolve:{loading:LoadingPage}},
//   //{path:'dashboard',component,resolve:{loading:LoadingPage}},
//   {path:'profile',component:ProfileComponent,resolve:{loading:LoadingPage}},
//   {path:'publish',component:PublishPostComponent,resolve:{loading:LoadingPage}}
// ];


export const routes:Routes =[
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'',
        children:[
          {path: '', component: PostsListComponent},
          {path: 'home', component: PostsListComponent,resolve:{loading:LoadingPage}},
          {path: 'profile', component: ProfileComponent,resolve:{loading:LoadingPage}},
          {path: 'publish', component: PublishPostComponent,resolve:{loading:LoadingPage}}
        ]
      }
    ]
  }


];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,FormsModule,
    SharedModule,JsonpModule
  ],
  providers:[ProfileService,SearchService,DetailService],
  declarations: [DashboardComponent, PostsListComponent, ProfileComponent, PublishPostComponent, SearchComponent, DetailComponent, CommentComponent]
})
export class DashboardModule { }
