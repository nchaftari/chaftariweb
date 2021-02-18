import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { error } from 'protractor';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
 public  products=[];

  async ngOnInit() {
    axios.get('http://localhost:1337/products').then(response => {
  console.log(response);

});
try {
  const response = await axios.get('http://localhost:1337/products');
   this.products = response.data;


} catch (error) {
  // this.error = error;
}


  }

  nextCarousel()
  {
    // document.getElementById('carousel').carousel('next')
  }






}
