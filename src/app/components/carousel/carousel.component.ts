import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEye,
  faHeart,
  faRandom,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  @Input() category:string;

  faHeart = faHeart;
  faRandom = faRandom;
  faEye = faEye;
  faShoppingCart = faShoppingCart;
  constructor(config: NgbCarouselConfig,public router:Router) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  public products = [];
  productColors=[];
  prod=this.products;

  async ngOnInit() {

    // axios.get('http://localhost:1337/categories/'+this.category).then((response) => {
    //   console.log(response.data.products[0]);
    // });

    await this.getApi()

    // await this.setColors();

    // this.products.forEach(element => {
    //    this.productColors=element.colors;
    // });

//     setTimeout(()=>{
//  }, 5000);
  }

  setColors()
  {
    // var colors=JSON.parse(this.prod)
    this.products.forEach(product => {
      this.productColors=product.colors;
      this.productColors.forEach(element => {
        console.log(element.color);
        console.log("productColorItem"+element.color+product.id+this.category);

        (<HTMLInputElement>document.getElementById("productColorItem"+element.color+product.id+this.category)).style.backgroundColor=element.color;
   });


      });




  }

 async getApi():Promise<boolean>
  {
    try {
      const response = await axios.get('http://localhost:1337/products/?categories='+this.category);
      this.products = response.data;

      console.log("category"+this.category);
      console.log(response);
      (<HTMLImageElement>(
        document.getElementById(this.category)
      )).style.display = 'block';

      return true;

      // console.log(this.products[0].productImage[0].formats.thumbnail.url)
    } catch (error) {
      alert(error);
      return false;

      // this.error = error;
    }

  }

  // openProductPage()
  // {
  //   // product=this.category.2
  //   this.router.navigate(["/product-page"],{state:{product: this.products[1]}})
  // }

}
