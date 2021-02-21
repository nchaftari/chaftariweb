import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  categories=[];
  categoriesId=[];


  async ngOnInit() {
    await this.getApi();


    this.categoriesId.push(this.categories);

    setTimeout(() =>
    {
        this.toggleMenu();
    },
    1000);

    // this.categories.push("1");
    // this.categories.push("2");


  }

  async getApi():Promise<boolean>
  {
    try {
      const response = await axios.get('http://localhost:1337/categories/');
      this.categories = response.data;
      // this.categoriesId=response.data.categories;
      console.log(this.categories);
      // (<HTMLImageElement>(
      //   document.getElementById(this.category)
      // )).style.display = 'block';
      return true;

      // console.log(this.products[0].productImage[0].formats.thumbnail.url)
    } catch (error) {
      alert(error);
      return false;

      // this.error = error;
    }
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  toggleMenu()
  {
    (<HTMLInputElement>document.getElementById("wrapper")).classList.toggle("toggled");
    if((<HTMLInputElement>document.getElementById("window")).clientWidth<=768)
    {
    (<HTMLInputElement>document.getElementById("window")).classList.remove("toggled");

    }
    else
    {
      (<HTMLInputElement>document.getElementById("window")).classList.add("toggled");

    }
  }


// $(window).resize(function(e) {
//   if($(window).width()<=768){
//     $("#wrapper").removeClass("toggled");
//   }else{
//     $("#wrapper").addClass("toggled");
//   }
// });
}
