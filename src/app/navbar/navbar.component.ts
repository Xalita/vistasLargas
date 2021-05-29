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

  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild ('menu2') menu2!: ElementRef;

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



  // @HostListener('window: scroll', ['$event'])
  // handleStuff(e: any): void {
  //   const topPos = window.pageYOffset;
  //   const navBar = document.getElementsByClassName ('menu2');
  //   if (topPos > this.menuPosition2) {
  //     navBar.classList.add ('sticky2');
  //   } else
  //   {
  //     navBar.classList.add ('sticky2');

  //   }
  // }



  checkIsClicked(): void {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }




  constructor() {

   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    const offTop = this.menuElement.nativeElement.offsetTop;
    this.menuPosition = offTop;
    this.menu2.nativeElement.offsetTop = this.menuPosition + 100;
}

}
