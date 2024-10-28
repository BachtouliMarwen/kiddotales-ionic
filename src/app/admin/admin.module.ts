import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IonicModule } from '@ionic/angular';
import { AdminHomePageModule } from './admin-home/admin-home.module';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    AdminHomePageModule,
    SharedModule
  ]
})
export class AdminModule { }
