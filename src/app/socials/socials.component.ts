import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {


  faFacebook=faFacebook;
  faInstagram=faInstagram;


  // faFacebook=faFacebookF;

  constructor() { }

  ngOnInit(): void {
  }

}
