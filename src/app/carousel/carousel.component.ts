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
    axios.get('http://localhost:1337/categories/'+this.category).then((response) => {
      console.log(response.data.products[0]);
    });

    try {
      const response = await axios.get('http://localhost:1337/categories/'+this.category);
      this.products = response.data.products;

      (<HTMLImageElement>(
        document.getElementById('productCarousel')
      )).style.display = 'block';
      // console.log(this.products[0].productImage[0].formats.thumbnail.url)
    } catch (error) {
      alert(error);
      // this.error = error;
    }
  }
}
