import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isClicked = false;

  checkIsClicked() {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
