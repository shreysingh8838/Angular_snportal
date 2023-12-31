import { Component, OnInit } from '@angular/core';
import { CallHomeDataService } from '../call-home-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
  
<!-- Loading Page -->
  <div *ngIf="isLoading; else dataContent" class="loading-container">
    <div class="container-wrapper">
      <h1 class="loading-text">Loading</h1>
    </div>
      <div class="container-wrapper">
        <img          
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
          class="loadingemblemimg"
        />
      </div>
  </div>

<!-- When the data is loaded then show this template -->
  <ng-template #dataContent>
<!-- Banner Img -->
    <div>
      <img class="banner-img" src="../assets/g20-banner_1.png" alt="">
    </div>

<!-- Emblem Img -->
    <!-- <div class="container-wrapper">
      <div class="container-img">
        <img
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
          class="emblemimg"
        />
      </div>
      </div> -->

<!-- changes for master-details layout -->
      <!-- <div class="master-details-container">

        <div class="master">
          <div class="container-wrapper">
            <h2 class="job-title" (click)="toggleDetails('result')">Result</h2>
          </div>
          <div class="container-wrapper">
            <h2 class="job-title" (click)="toggleDetails('admitCard')">Admit Card</h2>
          </div>
          <div class="container-wrapper">
            <h2 class="job-title" (click)="toggleDetails('latestJob')">Latest Jobs</h2>
          </div>
          <div class="container-wrapper">
            <h2 class="job-title" (click)="toggleDetails('admission')">Admission</h2>
          </div>
        </div>

        <div class="details">
          <div class="container-wrapper" *ngIf="showDetails === ''">
            <div class="container-wrapper">
              <img          
                src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
                class="loadingemblemimg"
              />
            </div>
          </div>
          <div class="container-wrapper" *ngIf="showDetails === 'result'">
            <div class="link-list" id="jobs">
              <a *ngFor="let result of resultSet" routerLink="/product" [queryParams]="{ link: result.link }">{{ result.title }}</a>
              <button class="view-more-button">View More</button>
            </div>
          </div>
          <div class="container-wrapper" *ngIf="showDetails === 'admitCard'">
            <div class="link-list" id="jobs">
              <a *ngFor="let admitCard of admitCardSet" routerLink="/product" [queryParams]="{ link: admitCard.link }">{{ admitCard.title }}</a>
              <button class="view-more-button">View More</button>
            </div>
          </div>
          <div class="container-wrapper" *ngIf="showDetails === 'latestJob'">
            <div class="link-list" id="jobs">
              <a *ngFor="let latestJob of latestJobSet" routerLink="/product" [queryParams]="{ link: latestJob.link }">{{ latestJob.title }}</a>
              <button class="view-more-button">View More</button>
            </div>
          </div>
          <div class="container-wrapper" *ngIf="showDetails === 'admission'">
            <div class="link-list" id="jobs">
              <a *ngFor="let admission of admissionSet" href="{{ admission.link }}">{{ admission.title }}</a>
              <button class="view-more-button">View More</button>
            </div>
          </div>
        </div>
      </div> -->
      
      
<!-- NON MASTER DETAILS LAYOUT -->  
      <div class="container-wrapper">
        <marquee behavior="alternate" direction=""><h2 class="welh2">Welcome to India's No. 1 Portal for Sarkari Naukri</h2></marquee>
        <!-- <marquee behavior="alternate" direction=""><h4 class="welh4">A centralized platform to access the latest government job notifications, exam results, admit cards, answer keys, admission forms, and syllabus </h4></marquee> -->
        <h4 class="welh4">A centralized platform to access the latest government job notifications, exam results OR admit cards, answer keys, admission forms, and syllabus </h4>

        <div class="box1">

          <!-- Latest job -->
          <div class="container-row">
            <div class="box-inside-container-row">
              <h2 class="job-title">Latest Jobs</h2>
              <div class="link-list" id="jobs">
                <a
                  *ngFor="let latestjob of latestJobSet"
                  routerLink="/product"
                  [queryParams]="{ link: latestjob.link }"
                  target="_blank"
                  >{{ latestjob.title }}
                </a>
                <button class="view-more-button">View More</button>
              </div>
            </div>
          </div>
          
          <!-- Result -->
          <div class="container-row">
            <div class="box">
              <h2 class="job-title">Latest Result</h2>
              <div class="link-list" id="jobs">
                <a
                  *ngFor="let result of resultSet"
                  routerLink="/product"
                  [queryParams]="{ link: result.link }"
                  target="_blank" 
                  >{{ result.title }}
                </a>
                <!-- <a routerLink="singlelist" [queryParams]="{set: 'resultSet'}">Result</a> -->
                <button class="view-more-button">View More</button>
              </div>
            </div>
          </div>

          <!-- AdmitCard -->
          <div class="container-row">
            <div class="box-inside-container-row">
              <h2 class="job-title">Latest Admit Card</h2>
              <div class="link-list" id="jobs">
                <a
                  *ngFor="let admitCard of admitCardSet"
                  routerLink="/product"
                  [queryParams]="{ link: admitCard.link }"
                  target="_blank" 
                  >{{ admitCard.title }}</a
                >
                <button class="view-more-button">View More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
  </ng-template>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true; // Flag to track loading state

  jobs: string[] = [];
  resultSet: any[] = [];
  admitCardSet: any[] = [];
  latestJobSet: any[] = [];
  // changes for master-details layout
  // showDetails: string = '';
  constructor(private callHomeDataService: CallHomeDataService, 
              private titleService: Title
              ) {}

  ngOnInit() {
    this.titleService.setTitle('Home | Milegi Sarkari Naukri');

    this.callHomeDataService.getHomeDataList().subscribe((homeData: any[]) => {
      console.log("v23");
      // console.log(homeData);
      this.resultSet = homeData[0];
      this.admitCardSet = homeData[1];
      this.latestJobSet = homeData[2];
      this.isLoading = false;
      
      // Add media query listener
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      this.handleMediaQueryChange(mediaQuery); // Call the method initially
      mediaQuery.addListener(this.handleMediaQueryChange.bind(this));
    });
  }

  handleMediaQueryChange(mediaQuery: MediaQueryListEvent | MediaQueryList): void {
    if ((mediaQuery as MediaQueryListEvent).matches) {
      // Media query matches, handle accordingly
      console.log('Media query matches');
      this.resultSet = this.resultSet.slice(0,5);
      this.admitCardSet = this.admitCardSet.slice(0,5);
      this.latestJobSet = this.latestJobSet.slice(0,5);
    } else {
      // Media query doesn't match
      console.log('Media query doesn\'t match');
    }
  }
  // changes for master-details layout
  // toggleDetails(details: string) {
  //   this.showDetails = details;
  // }
}
