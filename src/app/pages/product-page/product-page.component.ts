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

  async  ngOnInit() {
    // this.router.navigate([], { relativeTo: this.route});
    // this.route.queryParams.subscribe(
    //   params => {
    //     this.productIn =  params['product'];
    //     // this.language=params['language'];
    //   }
    // )
    await (this.product=JSON.parse(this.productIn));
    // // var prod=JSON.parse(this.product);
    console.log(this.product )

    this.setColors();
    // // console.log(this.Product)

  }

  setColors() {
    // var colors=JSON.parse(this.prod)

      this.product.colors.forEach((element) => {
        var obj = <HTMLInputElement>(
          document.getElementById(
            'productColorItemSpan' + element.color
          )
        );
        console.log(element.color);
        console.log(
          'productColorItem' + element.color
        );
        obj.style.backgroundColor = element.color;

        if (obj.style.backgroundColor == 'white') {
          obj.style.borderColor = '#6b6b6b !important';
          obj.style.borderWidth = '1px';
          obj.style.borderStyle = 'solid';
        }
      });
  }

}
