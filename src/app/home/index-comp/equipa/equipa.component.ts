import { TEAM } from './db_equipa';
import { Component, OnInit, Input, Directive } from '@angular/core';


@Directive ({
  selector: 'slide-item',
})

export class SlideElement {}

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.scss']
})
export class EquipaComponent implements OnInit {

  equipa = TEAM;
  currentSlide = 0;
  itemWidth = 0;

  slides = [[]];
  currentSlideBoll = false;
  hoverOn = false;





  getWidth(): any {
    this.itemWidth = window.innerWidth;
    return this.itemWidth;
  }



  next(): void {
    this.currentSlide +=  1;

    if (this.currentSlide === this.equipa.length) {
      this.currentSlide = 0;
    }
  }



  constructor() {

  }

  ngOnInit(): void {



}


}
