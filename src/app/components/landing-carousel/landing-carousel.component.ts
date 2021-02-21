import { Component, OnInit } from '@angular/core';
import { faEye, faHeart, faRandom, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css']
})
export class LandingCarouselComponent implements OnInit {

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

  public slides = [];

  async ngOnInit(){
    axios.get('http://localhost:1337/slideshows').then(response => {
      console.log(response);
    });

    try {
      const response = await axios.get('http://localhost:1337/slideshows');
       this.slides = response.data;

       (<HTMLImageElement>document.getElementById("slideshow")).style.display="block";


    } catch (error) {
      // this.error = error;
    }

  }

}
