import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
                <header>
                  
                  <div class="header-img">
                    <img src="./assets/india_640 (1).png" class="header-mainimg">
                  </div>
                  <div class="header-text">
                    <h1 class="header-hindi-text">मिलेगी सरकारी नौकरी</h1>
                    <h1 class="header-english-text">Milegi Sarkari Naukri</h1>
                  </div>
                  
                </header>

                <nav [ngClass]="{ 'open': isNavOpen }">
                  <div class="menu-icon-left" (click)="toggleNav()">
                    <img class="menu-icon-pic" src="./assets/dropdown-removebg-preview.png" alt="">
                  </div>
                  <div class="nav-a-list">
                    <a routerLink="home">Home</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'resultSet'}">Result</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'latestjob'}">Latest Jobs</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'admitcard'}">Admit Cards</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'answerkey'}">Answer Keys</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'admission'}">Admission Forms</a>
                    <a routerLink="singlelist" [queryParams]="{set: 'syllabus'}">Syllabus</a>
                    <a routerLink="contact">Contact Us</a>
                  </div>
                  
                </nav>

                <router-outlet></router-outlet>
                <footer>
                  <p class="footerp">&copy; 2023 MilegiSarkariNaukri. All rights reserved.</p>
                  <p class="footerp">For advertising in this website contact us milegisarkarinaukrii@gmail.com</p>

                  <div class="disclaimer">
                    <p class="">
                      Disclaimer : The Examination Results / Marks published in this Website is only for the immediate Information to the Examinees an does not to be a constitute to be a Legal Document. While all efforts have been made to make the Information available on this Website as Authentic as possible. We are not responsible for any Inadvertent Error that may have crept in the Examination Results / Marks being published in this Website nad for any loss to anybody or anything caused by any Shortcoming, Defect or Inaccuracy of the Information on this Website.
                    </p>
                  </div>
                </footer>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavOpen: boolean = false;
  isDropdownOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
