import { Component, OnInit } from '@angular/core';
import { SLIDE } from "../mock-slide";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  img = SLIDE;
  
  counter: number = 0;

    test () {
      console.log (this.img[0].url)
    }

    goNext() {
      this.counter++;
      console.log (this.counter);
      if (this.counter > this.img.length-1) {
        this.counter = 0;
      }
    }

    print() {
      console.log ("stuff");
    }

    goPrev() {
      this.counter--;
      if (this.counter < 0) {
        this.counter = this.img.length-1;
      }
    }
  constructor() { }

  ngOnInit(): void {
    

  }

}
