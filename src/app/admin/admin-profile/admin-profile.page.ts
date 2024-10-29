/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
})
export class AdminProfilePage implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private navCtrl: NavController
  ) {}

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
