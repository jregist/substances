import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { User } from './../shared/user';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthService {
  user = {};
  isLoggedIn: boolean;
  authState;

  
  constructor(public af: AngularFire, private router: Router) {
    
  } 

  signIn(credentials) {
    console.log(this.af.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }
    ));
  }

  isAuthenticated(): Observable<boolean> {
    return this.af.auth.map((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/signin']);
        return false;
      } else {
        return true;
      }
    }).first()
  }

  isAuth() {
    return this.isAuthenticated();
  }
  signOut() {
    console.log(this.af.auth.logout());
  }
}