import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorydetailPage } from './storydetail.page';

const routes: Routes = [
  {
    path: '',
    component: StorydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorydetailPageRoutingModule {}
