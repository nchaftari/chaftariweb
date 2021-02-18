import { Component, OnInit } from '@angular/core';
import { faCoffee, faEye, faHeart, faRandom, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  faHeart = faHeart;
  faRandom=faRandom;
  faEye=faEye;
  faShoppingCart=faShoppingCart;
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  public images = [
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
    {
      path:
        'http://localhost:1337/uploads/small_guitar_fretboard_notes_diagram_8d41c7f83e.png',
    },
  ];

  ngOnInit(): void {}
  next() {
    console.log('guiy');
  }
}
