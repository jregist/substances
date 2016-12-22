import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";
import { ReferenceService } from './services/reference.service';
import { SubstanceService } from './services/substance.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { SigninComponent } from './components/login/signin.component';
import { SubstanceListComponent } from './components/substances/substancelist.component';
import { SubstanceComponent } from './components/substances/substance.component';
import { SubstanceEditComponent } from './components/substances/substance-edit.component';
import { SubstanceItemComponent } from './components/substances/substance-item.component';
import { SubstanceDetailComponent } from './components/substances/substance-detail.component';
import { ReferenceComponent } from './components/references/reference.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { routing } from './routing';
var firebaseConfig = {
    apiKey: 'AIzaSyChOt0FaqjNn4WxbXgNpWyTsYygP9OEXfI',
    authDomain: 'transparency-c0e44.firebaseapp.com',
    databaseURL: 'https://transparency-c0e44.firebaseio.com',
    storageBucket: 'transparency-c0e44.appspot.com'
  };
  
  const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    MaterializeDirective,
    SigninComponent,
    SubstanceListComponent,
    SubstanceItemComponent,
    SubstanceDetailComponent,
    ReferenceComponent,
    HomeComponent,
    DropdownDirective, 
    HeaderComponent,
    SubstanceEditComponent,
    SubstanceComponent
  ],
  exports:[DropdownDirective],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [ReferenceService, SubstanceService, FormBuilder, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
