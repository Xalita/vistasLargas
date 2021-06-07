import { Component, OnInit, Input } from '@angular/core';

import { TEAM } from './db_equipa';

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.scss']
})
export class EquipaComponent implements OnInit {

  equipa = TEAM;
  currentSlide = 0;

  next(): void {
    this.currentSlide = this.currentSlide + 1;

    if (this.currentSlide === this.equipa.length) {
      this.currentSlide = 0;
    }

  }

  constructor() { }

  ngOnInit(): void {


}
}
