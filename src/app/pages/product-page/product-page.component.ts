import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonSourceFile } from 'typescript';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) {

    this.route.queryParams.subscribe(
      params => {
        this.productIn =  params['product'];
        // this.language=params['language'];
      }
    )

  }
  productIn:string;
  product;
  images=[];

  ngOnInit(): void {
    // this.router.navigate([], { relativeTo: this.route});
    // this.route.queryParams.subscribe(
    //   params => {
    //     this.productIn =  params['product'];
    //     // this.language=params['language'];
    //   }
    // )
    this.product=JSON.parse(this.productIn);
    // // var prod=JSON.parse(this.product);
    console.log(this.product )
    // // console.log(this.Product)

  }

}
