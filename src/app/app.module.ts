import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderButtonComponent } from './carousel/slider-button/slider-button.component';
import { SlideComponent } from './carousel/slide/slide.component';
import { SliderHeaderComponent } from './carousel/slider-header/slider-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SliderButtonComponent,
    SlideComponent,
    SliderHeaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
