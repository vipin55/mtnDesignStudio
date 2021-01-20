import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit, AfterViewInit {

  @Output() messageEvent = new EventEmitter();
  @Input() text;

  constructor() { }

  ngOnInit(): void {
  }
  clickFunction(): void{
    this.messageEvent.emit();
  }

  ngAfterViewInit() {
    this.text = "<span>&#8249</span>";
  }

}
