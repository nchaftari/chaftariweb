import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  categories=[];


  ngOnInit(): void {
    this.categories.push("1");
    this.categories.push("2");

  }
  show()
  {
    (<HTMLImageElement>(
      document.getElementById("productS")
    )).style.display = 'block';
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
