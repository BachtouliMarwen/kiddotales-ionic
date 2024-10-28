import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFormPageRoutingModule } from './category-form-routing.module';

import { CategoryFormPage } from './category-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CategoryFormPageRoutingModule
  ],
  declarations: [CategoryFormPage]
})
export class CategoryFormPageModule {}
