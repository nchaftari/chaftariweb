import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './common/header/header.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingCarouselComponent } from './components/landing-carousel/landing-carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SocialsComponent } from './socials/socials.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CarouselComponent,
    LandingCarouselComponent,
    HomeComponent,
    WelcomeBannerComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    ProductCategoryComponent,
    SocialsComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
