import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashscreenRoutingModule } from './splashscreen-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LandingPageModule } from './landing/landing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplashscreenRoutingModule,
    IonicModule,
    FormsModule,
    LandingPageModule
  ]
})
export class SplashscreenModule { }
