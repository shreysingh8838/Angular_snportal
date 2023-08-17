import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallProductDataService } from '../call-product-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
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
  <!-- total vacancy -> string -->
  <div class="container-wrapper">
    <div class="container-row">

      <!-- Heading Content -->
      <div class="heading-list">
          <h1> <strong>{{ headingContent[0] }} </strong></h1>
          <h4>{{ headingContent[1] }}</h4>
          <h4>{{ headingContent[2] }}</h4>
      </div>

      <div class="button-wrapper">
        <!-- Official Website -->
        <a href="{{ officialWebsite }}" target="_blank" >
          <button class="btn-primary">Official Website</button>
        </a>

        <!-- Apply Online -->
        <a href="{{ applyOnlineLink }}" target="_blank" >
          <button class="btn-primary">Apply Online</button>
        </a>
      </div>
    </div>
      <div class="row-wrapper">
        
        <!-- Total Vacancy -->
        <h4>{{ totalVacancy }}</h4>

        <div class="row">
          <!-- Age Limit -->
          <div *ngIf="flagageLimit" class="age-limit">
            <h3>Age Limit</h3>
            <ul>
              <li *ngFor="let agelimit of ageLimit">{{ agelimit }}</li>
            </ul>
          </div>
        </div>

        <div class="row">
            <!-- Application Fees -->
          <div *ngIf="flagApplicationFees" class="application-fees">
            <h3>Application Fees</h3>
            <div class="fees-list">
              <ul>
                <li *ngFor="let applicationfees of applicationFees">{{ applicationfees }}</li>
              </ul>
            </div>
          </div>
        </div>
      
        <div class="row">
          <!-- Important Dates -->
          <div *ngIf="flagimpDates" class="imp-dates">
            <h3>Important Dates</h3>
            <div class="dates-list">
              <ul>
                <li *ngFor="let impdates of impDates">{{ impdates }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- How to Fill -->
          <div *ngIf="flaghowToFill" class="how-to-fill">
            <h3>How to Apply</h3>
            <ul>
              <li class="howtofillLi" *ngFor="let howtofill of howToFill">{{ howtofill }}</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <!-- Downloadable Links -->
          <div class="downloads-list">
            <ul class="downloads-list">
              <li *ngFor="let entry of downloadLinks | keyvalue">
                <a href="{{ entry.value }}"  target="_blank" >
                  <button class="btn-secondary">{{ entry.key }}</button>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
</ng-template>
`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(private route : ActivatedRoute, private callProductData : CallProductDataService, private titleService : Title){}

  isLoading: boolean = true; // Flag to track loading state

  homedata : any;
  link : string = "";

  // prod Link -> string
  headingContent : any[] = [];
  
  ageLimit : any[] = [];
  flagageLimit : boolean = true;
  
  applicationFees : any[] = [];
  flagApplicationFees : boolean = true;
  
  howToFill : any[] = [];
  flaghowToFill : boolean = true;
  
  impDates : any[] = [];
  flagimpDates : boolean = true;

  totalVacancy : string = '';

  usefulLinks : any = null;
  applyOnlineLink : string = '';
  officialWebsite : string = '';
  downloadLinks : any[] = [];

  private HitClick(link : string){
    this.callProductData.sendLink(link).subscribe((data : any) => {
      // console.log(data);
      this.homedata = data;
      const headingContent = data.table_Content;
      this.headingContent = headingContent.filter((str: string) => str !== 'WWW.SARKARIRESULT.COM');

      this.ageLimit = data.table_AgeLimit;
      if(this.ageLimit.length == 0 ) this.flagageLimit = false;

      this.applicationFees = data.table_ApplicationFees;
      if(this.applicationFees.length == 0 ) this.flagApplicationFees = false;

      this.howToFill = data.how_To_Fill;
      if(this.howToFill.length == 0 ) this.flaghowToFill = false;

      this.impDates = data.table_ImportantDates;
      if(this.impDates.length == 0 ) this.flagimpDates = false;

      this.totalVacancy = data.table_TotalVacancy;
      this.usefulLinks = data.usefulLinks;
      this.applyOnlineLink = data.usefulLinks.apply_Online;
      this.officialWebsite = data.usefulLinks.official_website;
      this.downloadLinks = data.usefulLinks.downloads;

      this.isLoading = false;
      // console.log("Product data service hit");
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    this.titleService.setTitle('Contact Us | Milegi Sarkari Naukri');

    this.link = this.route.snapshot.queryParams['link'];
    // console.log("prod component hit");
    this.HitClick(this.link);
  }
}
