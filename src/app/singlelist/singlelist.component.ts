import { Component, OnInit } from '@angular/core';
import { CallSingleListService } from '../call-single-list.service';

import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CallProductDataService } from '../call-product-data.service';

@Component({
  selector: 'app-singlelist',
  template: `
        <!-- <p> List Size : {{dataSize}} </p> -->
  <div class="container-wrapper">
    <div class="container-row">
      <h2 class="job-title">{{title}}</h2> <br>
      <div class="link-list" id="jobs">
        <a *ngFor="let set of requiredSet" onclick="HitClick(set.link)" routerLink="/product" [queryParams]="{link: set.link }">{{ set.title }}</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
  title: string = '';
  flag: string = '';
  dataSize: number | undefined ;
  requiredSet: any[] = [];
  link: string = '';
  constructor(private route: ActivatedRoute,private callSingleListService: CallSingleListService, private callProductData : CallProductDataService) { }

  HitClick(link : string){
    this.link = link;
    this.callProductData.sendLink(this.link);
    console.log("method hit");
  }
  
  ngOnInit() {
    this.flag = this.route.snapshot.queryParams['set'];
    console.log(this.flag);

    switch(this.flag){
      case 'resultSet' : 
        this.callSingleListService.getDataList('resultSet').subscribe((Data: any[]) => {
          this.title = 'Result';
          this.dataSize = Data.length;
          this.requiredSet = Data;
        });
        break;
      case 'latestjob' : 
        this.callSingleListService.getDataList('latestjob').subscribe((Data: any[]) => {
          this.title = 'Latest Jobs';
          this.dataSize = Data.length;
          console.log("this is length" + Data.length);
          this.requiredSet = Data;
        });
        break;
      case 'admitcard' : 
        this.callSingleListService.getDataList('admitcard').subscribe((Data: any[]) => {
          this.title = 'Admit Cards';
          this.dataSize = Data.length;
          this.requiredSet = Data;
        });
        break;
      case 'answerkey' : 
        this.callSingleListService.getDataList('answerkey').subscribe((Data: any[]) => {
          this.title = 'Answer Keys';
          this.dataSize = Data.length;
          this.requiredSet = Data;
        });
        break;
      case 'admission' : 
        this.callSingleListService.getDataList('admission').subscribe((Data: any[]) => {
          this.title = 'Admission Forms';
          this.dataSize = Data.length;
          this.requiredSet = Data;
        });
        break;
      case 'syllabus' : 
        this.callSingleListService.getDataList('syllabus').subscribe((Data: any[]) => {
          this.title = 'Syllabus';
          this.dataSize = Data.length;
          this.requiredSet = Data;
        });
        break;
      default : null;
    }
  }
}
