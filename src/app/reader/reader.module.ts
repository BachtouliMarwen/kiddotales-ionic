import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomePage } from './home/home.page';
import { EndingsPage } from './endings/endings.page';
import { ProfilePage } from './profile/profile.page';
import { LikesPage } from './likes/likes.page';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule
  ],

})
export class ReaderModule { }
