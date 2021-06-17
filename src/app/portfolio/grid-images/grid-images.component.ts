import { Component, OnInit } from '@angular/core';

import { port } from './../mock/mock-port';

@Component({
  selector: 'app-grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.scss']
})
export class GridImagesComponent implements OnInit {

  portfolio = port;

  constructor() { }

  ngOnInit(): void {
  }

}
