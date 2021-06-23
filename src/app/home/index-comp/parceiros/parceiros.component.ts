import { Component, Input, OnInit } from '@angular/core';

import { state,trigger, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss'],
})
export class ParceirosComponent implements OnInit {

  @Input() data: any = [];

  next = true;
  nada = false;
  constructor() { }

  ngOnInit(): void {
  }

}
