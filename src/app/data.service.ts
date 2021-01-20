import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSlides(): object{
    return  [
      { url: 'assets/images/slide.JPG', text1: 'Mobile', text2: 'internet', link: ''},
      { url: 'assets/images/slide.JPG', text1: 'Home', text2: 'internet', link: ''},
      { url: 'assets/images/slide.JPG', text1: 'Get a device', text2: '', link: ''},
      { url: 'assets/images/slide.JPG', text1: 'Add a', text2: 'phone-line', link: ''},
      { url: 'assets/images/slide.JPG', text1: 'Upgrade', text2: '', link: ''}
    ];
  }
}
