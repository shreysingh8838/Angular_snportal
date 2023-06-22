import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
                <header>
                  <div class="header-img">
                    <img src="./assets/india_640 (1).png" class="header-mainimg">
                  </div>
                  <div class="header-text">
                    <h1 class="header-hindi-text">सरकारी नौकरी पोर्टल</h1>
                    <h1 class="header-english-text">Sarkari Naukri Portal</h1>
                  </div>
                </header>
                <nav>
                  <a routerLink="home">Home</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'resultSet'}">Result</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'latestjob'}">Latest Jobs</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'admitcard'}">Admit Cards</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'answerkey'}">Answer Keys</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'admission'}">Admission Forms</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'syllabus'}">Syllabus</a>
                  <a routerLink="singlelist" [queryParams]="{set: 'syllabus'}">Contact Us</a>
                </nav>
                <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
