import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryeditPage } from './storyedit.page';

const routes: Routes = [
  {
    path: '',
    component: StoryeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryeditPageRoutingModule {}
