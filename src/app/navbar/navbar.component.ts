import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuPosition: any;
  menuPosition2: any;
  isSticky = false;
  isSticky2 = false;

  isClicked = false;
  counter = 0;
  hover = false;

  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild ('menu2') menu2!: ElementRef;
  @ViewChild ('hamburguer') hamburguerEle!: ElementRef;
  @ViewChild ('line') lineElem!: ElementRef;


  offHandler(event: any): any {
    if (!this.hamburguerEle.nativeElement.contains(event.target)) { // Verifica posição do cursor
      this.menu2.nativeElement.classList.remove('block');
    }
  }



  @HostListener('window: scroll', ['$event'])
  handleScroll(): void {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.menuPosition) {
      this.isSticky = true;
      this.menuPosition2 = this.menuPosition;
    }
    else
     {
       this.isSticky = false;
     }
  }



onHover(): void {
  this.hover = !this.hover;
}



  checkIsClicked(): void {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }




  constructor() {
    document.addEventListener('click', this.offHandler.bind(this));
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    const offTop = this.menuElement.nativeElement.offsetTop;
    this.menuPosition = offTop;
    this.menu2.nativeElement.offsetTop = this.menuPosition + 200;
}

}
