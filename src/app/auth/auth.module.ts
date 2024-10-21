import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './login/login.module';
import { SignupPageModule } from './signup/signup.module';
import { ResetPasswordPageModule } from './reset-password/reset-password.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    FormsModule,
    LoginPageModule,
    SignupPageModule,
    ResetPasswordPageModule,
  ]
})
export class AuthModule { }
