import { port } from './../mock/mock-port';

import { Component, OnInit, ViewContainerRef, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-port-home',
  templateUrl: './port-home.component.html',
  styleUrls: ['./port-home.component.scss']
})
export class PortHomeComponent implements OnInit {

  @ViewChild('foto') photo!: ElementRef;
  @ViewChild('descricao') desc!: ElementRef;

  portfolio = port;

  changeVisibilty = false;


  // mouseIn(): any {
  //   for (let i of this.portfolio) {
  //     this.photo[i].nativeElement.style.display = 'none';
  //   }



  // }

  checkId(id: number): any {
    for (let i = 0; i < this.portfolio.length; i++) {
      if (id === this.portfolio[i].id){
        console.log ('isto é verdade' + id + this.portfolio[i].id);
        return this.changeVisibilty = true;
      }
    }
    console.log ('isto é falso');

    return this.changeVisibilty = false;
  }

  showHiddenDiv(): void {
    this.changeVisibilty = !this.changeVisibilty;
    console.log (this.changeVisibilty);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
