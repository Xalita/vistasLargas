import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

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
    if (!this.hamburguerEle.nativeElement.contains(event.target)) {
      // Verifica posição do cursor
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

logoSrc(): any {
  const windowScroll = window.pageYOffset;
  if (windowScroll > 0) {
    return `../../assets/img/logo_White.svg`;
  } else if (windowScroll === 0) {
    return `../../assets/img/logo.svg`;
  }
}

activeSticky(item: any): any {
  const windowScroll = window.pageYOffset;
  if (windowScroll > 0) {
    item = {
      'border-bottom': '3px solid #fff'
    };
  }
}

  checkIsClicked(): void {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }



  scrollToContactTypes(): void {
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([''], { fragment: 'equipa' }).finally(() => {
          this.router.onSameUrlNavigation = 'ignore'; // Restore config after navigation completes
      });
  }


  constructor(private render: Renderer2, private router: Router) {
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
