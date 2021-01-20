import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-header',
  templateUrl: './slider-header.component.html',
  styleUrls: ['./slider-header.component.scss']
})
export class SliderHeaderComponent implements OnInit {

  constructor() { }

  @Input() heading;
  ngOnInit(): void {
  }


}
