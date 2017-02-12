import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingElementComponent} from "./loading-component/loading-element.component";
import {TextAnimComponent} from "./text-anim/text-anim.component";
import {VCenterComponent} from "./v-center/v-center.component";
import {LoadedPageService} from "./loading-component/loaded-page.service";
import { FadeAnimComponent } from './fade-anim/fade-anim.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingElementComponent,
    TextAnimComponent,
    VCenterComponent,
    FadeAnimComponent,
    CustomBtnComponent
  ],

  exports:[LoadingElementComponent, TextAnimComponent, VCenterComponent,FadeAnimComponent,
    CustomBtnComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ LoadedPageService ]                       //<<<====here
    };
  }
}
