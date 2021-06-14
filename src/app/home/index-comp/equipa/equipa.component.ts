import { TEAM } from './db_equipa';
import { Component, OnInit, Input } from '@angular/core';



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
  hoverOn= false;

  onHover(){
    this.hoverOn = !this.hoverOn;
  }


  showCards(arr: any, size: number): any {
    const len = arr.length;


    for (let i = 0; i < len; i++) {
      this.slides.push(arr.splice(i, i + size));
    }
    return this.slides;
  }

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

// setClass(): any  {
//   if (this.getWidth() < 1024) {
//     return `carousel768`;
//   } else if (this.getWidth() < 768) {
//     return `carousel320`;
//   } else  if (this.getWidth() < 1500) {
//     return `carousel1024`;
//   }
// }

  constructor() {

  }

  ngOnInit(): void {
    this.getWidth();
    // setInterval(() => {this.getWidth()}, 1000);
    // console.log(this.getWidth());
    this.slides = this.showCards(this.slides, 3);

    console.log (this.slides);

}


}
