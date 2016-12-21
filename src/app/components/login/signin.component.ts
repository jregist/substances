import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './../../services/auth.service';
import { User } from './../../shared/user';

@Component({
  selector: 'login',
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    isAuthenticated: boolean = false;
    errorMessage = '';

 constructor(private fb: FormBuilder, private auth: AuthService) {
        this.auth.isAuthenticated().subscribe(
        authStatus => this.isAuthenticated = authStatus
        );
    }
    onSignin() {
        var obj = this.myForm.value;
        console.log('sending - ' + obj.email, obj.password);
        console.log(this.auth.signIn(obj));
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}