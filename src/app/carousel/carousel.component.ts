import { Component, OnInit, Input, HostListener } from '@angular/core';
import {trigger, state, transition, animate, style, query, animateChild} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('rightAnimation', [
        transition('in<=>out',  [
          style({transform: 'translateX(30px)'}),
          animate(400)
        ])
    ]),
    trigger('leftAnimation', [
      transition('in<=>out',  [
        style({transform: 'translateX(-30px)'}),
        animate(400)
      ])
  ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides;
  next = '&#8250;';
  prev = '&#8249;';
  displaySlide = 5;
  visibleSlide = [ ...Array(this.displaySlide).keys() ].map( i => i);

  swipeArray = {
    startX: 0,
    startY: 0,
    dist: 0,
    threshold: 20,
    allowedTime: 500,
    elapsedTime: 0,
    startTime: 0,
    distX: 0,
    distY: 0,
    restraint: 100,
    currentX: 0,
    currentY: 0,
    swipeDir: 'none',
    rightState: 'out',
    leftState: 'out',
  };

  constructor() {
    this.getScreensize();
  }

  ngOnInit(): void {
  }

  handleswipe(swipeDirPar): void{
    console.log(swipeDirPar);
    if (swipeDirPar === 'right'){
        this.onNextClick();
      }else if (swipeDirPar === 'left'){
       this.onPreviousClick();
    }
  }

@HostListener('window:resize', ['$event'])
getScreensize(event?): void{
   if (innerWidth >= 768 && innerWidth <= 1023){
      this.displaySlide = 3;
   }else if (innerWidth >= 320 && innerWidth <= 768){
      this.displaySlide = 1;
   }else if (innerWidth > 1023){
    this.displaySlide = 5;
   }
   this.visibleSlide = [ ...Array(this.displaySlide).keys() ].map( i => i);
}

  @HostListener('touchstart', ['$event'])
  touchStart(event): void{
     const touchobj = event.changedTouches[0];
     this.swipeArray.dist = 0;
     this.swipeArray.startX = touchobj.pageX;
     this.swipeArray.startY = touchobj.pageY;
     event.preventDefault();
 }

 @HostListener('touchmove', ['$event'])
 touchMove(event): void{
   event.preventDefault();
}

@HostListener('touchend', ['$event'])
 touchEnd(event): void{
  if (event.srcElement.className.indexOf('control') < 0){
    const touchobj = event.changedTouches[0];
    this.swipeArray.distX = touchobj.pageX - this.swipeArray.startX;
    this.swipeArray.distY = touchobj.pageY - this.swipeArray.startY;
    if (Math.abs(this.swipeArray.distX) >= this.swipeArray.threshold && Math.abs(this.swipeArray.distY) <= this.swipeArray.restraint){
      this.swipeArray.swipeDir = (this.swipeArray.distX < 0) ? 'right' : 'left';
    }else if (Math.abs(this.swipeArray.distY) >= this.swipeArray.threshold && Math.abs(this.swipeArray.distX) <= this.swipeArray.restraint){
      this.swipeArray.swipeDir = (this.swipeArray.distY < 0) ? 'up' : 'down';
    }
    this.handleswipe(this.swipeArray.swipeDir);
    event.preventDefault();
  }
}

@HostListener('mousedown', ['$event'])
  mousedown(event): void{
    this.swipeArray.dist = 0;
    this.swipeArray.startX = event.clientX;
    this.swipeArray.startY = event.clientY;
    this.swipeArray.startTime = new Date().getTime();
    event.preventDefault();
}

@HostListener('mouseup', ['$event'])
mouseup(event): void{
  if (event.srcElement.className.indexOf('control') < 0){
    this.swipeArray.distX = event.clientX - this.swipeArray.startX;
    this.swipeArray.distY = event.clientY - this.swipeArray.startY;
    this.swipeArray.elapsedTime = new Date().getTime() - this.swipeArray.startTime;
    if (Math.abs(this.swipeArray.distX) >= this.swipeArray.threshold && Math.abs(this.swipeArray.distY) <= this.swipeArray.restraint){
      this.swipeArray.swipeDir = (this.swipeArray.distX < 0) ? 'right' : 'left';
    }else if (Math.abs(this.swipeArray.distY) >= this.swipeArray.threshold && Math.abs(this.swipeArray.distX) <= this.swipeArray.restraint){
      this.swipeArray.swipeDir = (this.swipeArray.distY < 0) ? 'up' : 'down';
    }
    this.handleswipe(this.swipeArray.swipeDir);
    event.preventDefault();
  }
}
  onPreviousClick(): void{
    this.swipeArray.leftState = this.swipeArray.leftState === 'in' ? 'out' : 'in';
    this.arrayRotate(this.slides, true);
  }

  onNextClick(): void{
    this.swipeArray.rightState = this.swipeArray.rightState === 'in' ? 'out' : 'in';
    this.arrayRotate(this.slides, false);
  }

  arrayRotate(arr, reverse): string[]{
    if (reverse){
      arr.unshift(arr.pop());
    }else{
      arr.push(arr.shift());
    }
    return arr;
  }
}
