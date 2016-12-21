import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from "./dropdown.directive";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'pl-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
isAuthenticated: boolean = false;

    constructor(private auth: AuthService) {
        this.auth.isAuthenticated().subscribe(
        authStatus => this.isAuthenticated = authStatus
        );
    }

    onLogOut() {
        this.auth.signOut();
    }
    isSignedIn() {
      return this.isAuthenticated;
    }
  ngOnInit() {
  }

}
