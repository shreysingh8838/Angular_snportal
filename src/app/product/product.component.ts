import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(private route : ActivatedRoute){
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['link'];
    console.log(id);
  }
}
