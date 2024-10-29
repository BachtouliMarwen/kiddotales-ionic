/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private navCtrl: NavController
  ) {
   }

  onLogout() {
    this.authService.logout()
      .then(() => {
        this.navCtrl.navigateRoot('/auth');
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  }

  ngOnInit() {
  }

}
