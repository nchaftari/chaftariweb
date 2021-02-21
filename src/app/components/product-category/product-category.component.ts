import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  @Input() category:any;
  @Input() categoryId:any;

  // categoryId="";

  constructor() { }

  ngOnInit(): void {
    // this.categoryId=this.category.Id;
    console.log(this.categoryId+ "test")
  }

}
