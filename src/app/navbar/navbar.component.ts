import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuPosition: any;
  isSticky = false;
  isClicked = false;

  @ViewChild('menu') menuElement!: ElementRef;

  @HostListener('window: scroll', ['$event'])
  handleScroll(): void {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.menuPosition) {
      this.isSticky = true;
    }
    else
     {
       this.isSticky = false;
     }
  }



  checkIsClicked(): void {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }



  ngAfterViewInit(){
    const offTop = this.menuElement.nativeElement.offsetTop;
    this.menuPosition = offTop;
}
  constructor() {

   }

  ngOnInit(): void {
  }


}
