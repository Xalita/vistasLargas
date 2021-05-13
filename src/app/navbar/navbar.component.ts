import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menu') menuElement!: ElementRef;

  @HostListener('window: scroll', ['$event']) 
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.menuPosition) {
      this.isSticky = true;
    }
    else 
     {
       this.isSticky = false;
     }
  }

  isSticky:boolean = false;
  isClicked:boolean = false;

  checkIsClicked() {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }

  menuPosition:any;

  ngAfterViewInit(){
    const offTop = this.menuElement.nativeElement.offsetTop;
    this.menuPosition = offTop;
}
  constructor() {

   }

  ngOnInit(): void {
  }


}
