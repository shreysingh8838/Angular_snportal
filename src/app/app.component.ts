import { Component, OnInit } from '@angular/core';
import { HomeService } from '../app/home.service';

@Component({
  selector: 'app-root',
  template: `<header>
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
            <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'sarkariresult';

  jobs: string[] = [];
  homeData: any[] = [];
  resultSet: any[] = [];
  admitCardSet: any[] = [];
  latestJobSet: any[] = [];
  answerKeySet: any[] = [];
  admissionSet: any[] = [];

  constructor(private homeService: HomeService){  }

  ngOnInit() {
    this.homeService.getHomeDataList().subscribe((homeData: any[]) => {
      console.log(homeData);
      this.homeData = homeData;
      this.resultSet = homeData[0];
      this.admitCardSet = homeData[1];
      this.latestJobSet = homeData[2];
      this.answerKeySet = homeData[3];
      this.admissionSet = homeData[4];
    });
  }
}
