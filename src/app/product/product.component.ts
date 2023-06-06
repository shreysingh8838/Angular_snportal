import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallProductDataService } from '../call-product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(private route : ActivatedRoute, private callProductData : CallProductDataService){}

  private HitClick(link : string){
    this.callProductData.sendLink(link).subscribe(data => {
      console.log("Product data service hit");
    },
    error => console.log(error));
  }

  homedata : any;
  ngOnInit(): void {
    const link :string = this.route.snapshot.queryParams['link'];
    console.log("prod component hit");
    this.HitClick(link);

    // this.callProductData.getHomeDataList().subscribe((homeData: any[]) => {
    //   this.homedata = homeData[0];
    //   console.log(this.homedata);
    // });
  }
}
