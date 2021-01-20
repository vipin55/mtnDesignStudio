import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarouselDemo';
  str: String = "What are you\n <b>here to do?</b>"
  heading = this.str.replace("\n", "<br>");
  slides;
  constructor(public dataService: DataService) {
    this.slides = dataService.getSlides();
  }
}
