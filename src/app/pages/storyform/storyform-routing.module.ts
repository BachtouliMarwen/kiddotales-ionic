import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryformPage } from './storyform.page';

const routes: Routes = [
  {
    path: '',
    component: StoryformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryformPageRoutingModule {}
