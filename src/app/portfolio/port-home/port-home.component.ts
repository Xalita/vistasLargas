import { port } from './../mock/mock-port';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-home',
  templateUrl: './port-home.component.html',
  styleUrls: ['./port-home.component.scss']
})
export class PortHomeComponent implements OnInit {

  portfolio = port;

  changeVisibilty = false;

  showHiddenDiv(): void {
    this.changeVisibilty = !this.changeVisibilty;
    console.log (this.changeVisibilty);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
