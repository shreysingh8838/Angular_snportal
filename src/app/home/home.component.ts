import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  template: `
  <marquee style="font-size: 30px;" >Anjali Meri jaan</marquee>
  <div class="container-wrapper">
    <div class="container-row">
      <h2 class="job-title">Result</h2>
      <div class="link-list" id="jobs">
      <a *ngFor="let result of resultSet" href= {{result.link}}>{{ result.title }}</a>
      </div>
    </div>
    <div class="container-row">
      <h2 class="job-title">Admit Card</h2>
      <div class="link-list" id="jobs">
      <a *ngFor="let admitCard of admitCardSet" href= {{admitCard.link}}>{{ admitCard.title }}</a>
      </div>
    </div>
    <div class="container-row">
      <h2 class="job-title">Latest Jobs</h2>
      <div class="link-list" id="jobs">
      <a *ngFor="let latestjob of latestJobSet" href={{latestjob.link}}>{{ latestjob.title }}</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: string[] = [];
  homeData: any[] = [];
  resultSet: any[] = [];
  admitCardSet: any[] = [];
  latestJobSet: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHomeDataList().subscribe((homeData: any[]) => {
      console.log(homeData);
      this.homeData = homeData;
      this.resultSet = homeData[0];
      this.admitCardSet = homeData[1];
      this.latestJobSet = homeData[2];
    });
  }
}

