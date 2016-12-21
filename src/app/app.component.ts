import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SubstanceComponent } from './components/substances/substance.component';
import { ReferenceComponent } from './components/references/reference.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Welcome to the Substance List';
}
