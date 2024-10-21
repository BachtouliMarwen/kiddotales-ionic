import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    IonicModule,
    FormsModule,
    HomePageModule
  ]
})
export class ReaderModule { }
