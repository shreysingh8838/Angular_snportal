import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
                <header>
                  <img src="./assets/My project.png" class="mainimg">
                  <h1 class="header-text">Sarkari Naukri Portal</h1>
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
