import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryeditPageRoutingModule } from './storyedit-routing.module';

import { StoryeditPage } from './storyedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StoryeditPageRoutingModule
  ],
  declarations: [StoryeditPage]
})
export class StoryeditPageModule {}
