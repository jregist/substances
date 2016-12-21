import { Routes, RouterModule } from '@angular/router';
import { SubstanceComponent } from './components/substances/substance.component';
import { ReferenceComponent } from './components/references/reference.component';
import { SubstanceEditComponent } from './components/substances/substance-edit.component';
import { SubstanceDetailComponent } from './components/substances/substance-detail.component';
import { SigninComponent } from './components/login/signin.component';
import { HomeComponent } from './home.component';
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'substances', component: SubstanceComponent },
  { path: 'references', component: ReferenceComponent },
  { path: 'signin', component: SigninComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
