import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header>
              <h1 class="header-text">Sarkari Naukri Portal</h1>
            </header>
            <nav>
              <a routerLink="home">Home</a>
              <a routerLink="singlelist">Result</a>
              <a href="#">Latest Jobs</a>
              <a href="#">Admit Card</a>
              <a href="#">Answer Key</a>
              <a href="#">Admission Form</a>
              <a href="#">Offline Form</a>
              <a href="#">Contact Us</a>
            </nav>
            <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sarkariresult';
}
