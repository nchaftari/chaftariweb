import { Component, Input, OnInit } from '@angular/core';
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
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  public products = [];

  async ngOnInit() {

    // axios.get('http://localhost:1337/categories/'+this.category).then((response) => {
    //   console.log(response.data.products[0]);
    // });

    await this.getApi()

//     setTimeout(()=>{
//  }, 5000);
  }


 async getApi():Promise<boolean>
  {
    try {
      const response = await axios.get('http://localhost:1337/categories/'+this.category);
      this.products = response.data.products;
      console.log(this.category);
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

}
