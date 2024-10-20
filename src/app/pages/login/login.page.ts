import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/user.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string=''
  password : string=''

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  async login(){
    try{
      const userData = await this.authService.loginUser(this.email,this.password);
      
      if (userData.role === UserRole.Admin ) {
        this.router.navigate(['admin/dashboard'])
      }else if (userData.role === UserRole.Reader){
        this.router.navigate(['reader/home'])
      }
    }catch(error){
      console.error('login failed:',error);
    }
  }
}
