import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryformPageRoutingModule } from './storyform-routing.module';

import { StoryformPage } from './storyform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StoryformPageRoutingModule
  ],
  declarations: [StoryformPage]
})
export class StoryformPageModule {}
