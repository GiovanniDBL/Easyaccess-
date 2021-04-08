import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autheasy: AuthenticationService,
              private router: Router){}

  canActivate(): boolean {

    if (this.autheasy.estaAutenticado()) {
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;

    // console.log('Guard');
    // return this.autheasy.estaAutenticado();
  }
}
