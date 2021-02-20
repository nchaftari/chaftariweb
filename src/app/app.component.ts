import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import axios from 'axios';
import * as myGlobals from 'globals'; //<==== this one (**Updated**)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chaftariweb';
  public products = [];

  constructor(
    // private viewContainerRef: ViewContainerRef,
    // private cfr: ComponentFactoryResolver
  ) {}

  async ngOnInit() {
    // axios.get('http://localhost:1337/categories/'+this.category).then((response) => {
    //   console.log(response.data.products[0]);
    // });

    // await this.getProducts();


  }
  // async getProducts()
  // {
  //   try {
  //     const response = await axios.get('http://localhost:1337/categories/');
  //     this.products = response.data;

  //   //    const GlobalVariable = Object.freeze({
  //   //     products:this.products,
  //   //     //... more of your variables
  //   // });
  //     (<HTMLImageElement>(
  //       document.getElementById('productCarousel')
  //     )).style.display = 'block';

  //     // console.log(this.products[0].productImage[0].formats.thumbnail.url)
  //   } catch (error) {
  //     alert(error);
  //     // this.error = error;
  //   }
  // }
}
