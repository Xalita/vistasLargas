import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-comp',
  templateUrl: './index-comp.component.html',
  styleUrls: ['./index-comp.component.scss']
})
export class IndexCompComponent implements OnInit {

  parceiros = [{
    id: 0,
    texto: '123'
  },
  {
    id: 1,
    texto: '456'
  },
  {
    id: 2,
    texto: '789'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
