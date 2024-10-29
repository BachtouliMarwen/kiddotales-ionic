import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorydetailPageRoutingModule } from './storydetail-routing.module';

import { StorydetailPage } from './storydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorydetailPageRoutingModule
  ],
  declarations: [StorydetailPage]
})
export class StorydetailPageModule {}
