import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallProductDataService } from '../call-product-data.service';

@Component({
  selector: 'app-product',
  template: ` 
  <!-- <form action="{{applyOnlineLink}}" method="POST">
    <input type="Submit"/>
  </form> -->

<!-- total vacancy -> string -->
<marquee behavior="alternate" direction="">
  <p>{{ totalVacancy }}</p>
</marquee>

<div class="container-wrapper">
  <div class="container-row">
  <div class="button-wrapper">
      <!-- Official Website -->
      <a href="{{ officialWebsite }}">
        <button class="btn-primary">Official Website</button>
      </a>

      <!-- Apply Online -->
      <a href="{{ applyOnlineLink }}">
        <button class="btn-primary">Apply</button>
      </a>
    </div>
    <!-- Heading Content -->
    <div class="heading-list">
      <ul class="">
        <li *ngFor="let headingcontent of headingContent">{{ headingcontent }}</li>
      </ul>
    </div>

    
    

    <!-- Age Limit -->
    <div *ngIf="flagageLimit" class="age-limit">
      <ul>
        <li *ngFor="let agelimit of ageLimit">{{ agelimit }}</li>
      </ul>
    </div>

    <!-- Application Fees -->
    <div class="fees-list">
      <ul class="">
        <li *ngFor="let applicationfees of applicationFees">{{ applicationfees }}</li>
      </ul>
    </div>

    <!-- Important Dates -->
    <div class="dates-list">
      <ul class="">
        <li *ngFor="let impdates of impDates">{{ impdates }}</li>
      </ul>
    </div>

    <!-- How to Fill -->
    <div *ngIf="flaghowToFill" class="how-to-fill">
      <ul>
        <li *ngFor="let howtofill of howToFill">{{ howtofill }}</li>
      </ul>
    </div>

    <!-- Downloadable Links -->
    <div class="downloads-list">
      <ul class="downloads-list">
        <li *ngFor="let entry of downloadLinks | keyvalue">
          <a href="{{ entry.value }}">
            <button class="btn-secondary">{{ entry.key }}</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(private route : ActivatedRoute, private callProductData : CallProductDataService){}

  homedata : any;
  link : string = "";

  // prod Link -> string
  headingContent : any[] = [];
  
  ageLimit : any[] = [];
  flagageLimit : boolean = true;
  
  applicationFees : any[] = [];
  
  howToFill : any[] = [];
  flaghowToFill : boolean = true;
  
  impDates : any[] = [];
  totalVacancy : string = '';
  usefulLinks : any = null;
  applyOnlineLink : string = '';
  officialWebsite : string = '';
  downloadLinks : any[] = [];

  private HitClick(link : string){
    this.callProductData.sendLink(link).subscribe((data : any) => {
      console.log(data);
      this.homedata = data;
      const headingContent = data.table_Content;
      this.headingContent = headingContent.filter((str: string) => str !== 'WWW.SARKARIRESULT.COM');
      this.ageLimit = data.table_AgeLimit;
      if(this.ageLimit.length == 0 ) this.flagageLimit = false;
      this.applicationFees = data.table_ApplicationFees
      this.howToFill = data.how_To_Fill;
      if(this.howToFill.length == 0 ) this.flaghowToFill = false;
      this.impDates = data.table_ImportantDates;
      this.totalVacancy = data.table_TotalVacancy;
      this.usefulLinks = data.usefulLinks;
      this.applyOnlineLink = data.usefulLinks.apply_Online;
      this.officialWebsite = data.usefulLinks.official_website;
      this.downloadLinks = data.usefulLinks.downloads;
      console.log("Product data service hit");
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    this.link = this.route.snapshot.queryParams['link'];
    console.log("prod component hit");
    this.HitClick(this.link);
  }
}
