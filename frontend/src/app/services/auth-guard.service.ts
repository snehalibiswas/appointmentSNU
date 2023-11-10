import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    console.log('AuthGuard: Checking if user is logged in...');
    if (!this.authService.isUserLoggedIn$.value) {
      console.log('AuthGuard: User is not logged in. Redirecting to login.');
      this.router.navigate(['login']).then(() => {
        console.log('AuthGuard: Navigation to login complete');
      });
    } else {
      console.log('AuthGuard: User is logged in. Allowing access.');
    }
    return this.authService.isUserLoggedIn$;
  }
  
  
}