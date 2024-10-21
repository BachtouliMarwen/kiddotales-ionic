import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(
    private authService: AuthServiceService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable <boolean> {
    return this.authService.isAuthenticated().pipe(
      map(isAuthenticated => {
        console.log(`User authenticated: ${isAuthenticated}`);
        if (!isAuthenticated){
          console.log('User not authenticated, redirecting to login.');
          this.router.navigate(['../auth/login']);
          return false;
        }
        return true;
      })
    );
  }

};
