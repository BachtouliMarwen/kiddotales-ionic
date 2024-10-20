import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;


  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
  this.firstName = '';
  this.lastName = '';
  this.phone = '';
  this.email = '';
  this.password = '';
  this.confirmPassword = '';
  this.gender = '';
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(){
    // no intialization required at the moment.
  }

  async register(){
    if (this.password === this.confirmPassword){
      try {
        await this.authService.registerUser(this.firstName, this.lastName, this.email, this.password, this.phone, this.gender);
        console.log('User registered successfully!');
        this.router.navigate(['/login']);
      }catch(error){
        console.error('error Error registering user:', error)
      }
    }else {
      console.error('Passwords do not match');
    }
  }
}
