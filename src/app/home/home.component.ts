import { Component, OnInit } from '@angular/core';
import { CallHomeDataService } from '../call-home-data.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-wrapper">
      <div class="container-img">
        <img
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
          class="emblemimg"
        />
      </div>
      </div>

      <div class="container-wrapper">
        <div class="container-row">
          <h2 class="job-title">Result</h2>
          <div class="link-list" id="jobs">
            <a
              *ngFor="let result of resultSet"
              routerLink="/product"
              [queryParams]="{ link: result.link }"
              >{{ result.title }}</a
            >
            <button class="view-more-button">View More</button>
          </div>
        </div>
        <div class="container-row">
          <h2 class="job-title">Admit Card</h2>
          <div class="link-list" id="jobs">
            <a
              *ngFor="let admitCard of admitCardSet"
              routerLink="/product"
              [queryParams]="{ link: admitCard.link }"
              >{{ admitCard.title }}</a
            >
            <button class="view-more-button">View More</button>
          </div>
        </div>
        <div class="container-row">
          <h2 class="job-title">Latest Jobs</h2>
          <div class="link-list" id="jobs">
            <a
              *ngFor="let latestjob of latestJobSet"
              routerLink="/product"
              [queryParams]="{ link: latestjob.link }"
              >{{ latestjob.title }}</a
            >
            <button class="view-more-button">View More</button>
          </div>
        </div>

        <div class="container-row">
          <h2 class="job-title">Admission</h2>
          <div class="link-list" id="jobs">
            <a
              *ngFor="let admission of admissionSet"
              href="{{ admission.link }}"
              >{{ admission.title }}</a
            >
            <button class="view-more-button">View More</button>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobs: string[] = [];
  resultSet: any[] = [];
  admitCardSet: any[] = [];
  latestJobSet: any[] = [];
  answerKeySet: any[] = [];
  admissionSet: any[] = [];

  constructor(private callHomeDataService: CallHomeDataService) {}

  ngOnInit() {
    this.callHomeDataService.getHomeDataList().subscribe((homeData: any[]) => {
      console.log(homeData);
      this.resultSet = homeData[0];
      this.admitCardSet = homeData[1];
      this.latestJobSet = homeData[2];
      this.answerKeySet = homeData[3];
      this.admissionSet = homeData[4];
    });
  }
}
