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

  showCards(arr: any, size: number): any {
    const len = arr.length;


    for (let i = 0; i < len; i++) {
      this.slides.push(arr.splice(i, i + size));
    }
    return this.slides;
  }

  getWidth(): void {
    this.itemWidth = window.innerWidth;
  }

  setClass(): any{
    return `
    .card {
      flex: 0 1 ${this.itemWidth}px;
      height: 40%;
      display: flex;
      flex-flow: column wrap;
      margin: 40px;
      justify-content: center;
      align-items: center;
    }
    `;
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
    this.getWidth();

    this.slides = this.showCards(this.slides, 3);

    console.log (this.slides);

}


}
