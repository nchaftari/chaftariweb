import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { JsonSourceFile } from 'typescript';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.productIn = params['product'];
    });
  }
  productIn: string;
  product;
  images = [];
  cartContents="";

  async ngOnInit() {
    await (this.product = JSON.parse(this.productIn));
    console.log(this.product);

    this.setColors();
  }
  async getItem() {
    var color = (<HTMLInputElement>(
      document.querySelector('input[name="color"]:checked')
    )).value;
    var size = (<HTMLInputElement>(
      document.querySelector('input[name="size"]:checked')
    )).value;
    var quantity = (<HTMLInputElement>document.getElementById('formQuantity'))
      .value;
    console.log(color + size + quantity + this.product.productName);

    if (localStorage.getItem("CARTID")==null) {
      await this.createCart(color, size, quantity);

    } else {
      alert('already have cart');

      await this.getCartContent();
      await this.createCartItem(color, size, quantity);
    }
  }
  async getCartContent(){
    if(this.cartContents== "")
    {
    try {
      const response = await axios.get('http://localhost:1337/carts/'+localStorage.getItem("CARTID"));

      this.cartContents=response.data;

      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }

  }

  async createCart(color, size, quantity) {
    var cart = {
      customer: null,
    };
    try {
      const response = await axios.post('http://localhost:1337/carts', cart);


      localStorage.setItem('CARTID', response.data.id);
      this.cartContents=response.data;
      this.createCartItem(color, size, quantity);

      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }

  async createCartItem(color, size, quantity) {

    var item = {
      name: this.product.productName,
      color: color,
      size: size,
      quantity: quantity,
    };

    try {
      axios.post('http://localhost:1337/cart-items', item).then((response) => {

        this.addcartItem(response.data.id);
        return true;
      });
    } catch (error) {
      alert(error);
      return false;
    }
  }

  async addcartItem(id) {
    var item = {
      cart_items: [id],
    };

    this.cartContents=JSON.stringify(this.cartContents);
    var parse_obj = JSON.parse(this.cartContents);
    parse_obj['cart_items'].push(id);
    this.cartContents = JSON.stringify(parse_obj);

    try {
      await axios
        .put(
          'http://localhost:1337/carts/' + localStorage.getItem('CARTID'),
          parse_obj
        )
        .then((response) => {
          this.cartContents=response.data;
          return true;
        });
    } catch (error) {
      alert(error);
      return false;
    }
  }

  setColors() {
    this.product.colors.forEach((element) => {
      var obj = <HTMLInputElement>(
        document.getElementById('productColorItemSpan' + element.color)
      );
      console.log(element.color);
      console.log('productColorItem' + element.color);
      obj.style.backgroundColor = element.color;

      if (obj.style.backgroundColor == 'white') {
        obj.style.borderColor = '#6b6b6b !important';
        obj.style.borderWidth = '1px';
        obj.style.borderStyle = 'solid';
      }
    });
  }
}
