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

  homedata : any;

  private HitClick(link : string){
    this.callProductData.sendLink(link).subscribe(data => {
      console.log(data);
      console.log("Product data service hit");
      // this.getHomeData();
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    const link :string = this.route.snapshot.queryParams['link'];
    console.log("prod component hit");
    this.HitClick(link);
  }
}
