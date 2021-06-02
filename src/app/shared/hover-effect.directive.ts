import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  @Input('openMenu') set render(event: MouseEvent) {
    this.counter++;
    console.log ('it was clicked');
    this.menu2.nativeElement.classList.add('block');
    if ( this.counter > 1) {
      console.log ('Porra para isto');
      this.menu2.nativeElement.classList.remove('block');
      this.counter = 0;
    }

  }

  private counter = 0;

  // @HostListener('click', ['$event'])
  // onCLick(event: MouseEvent): void{
  //   this.counter++;
  //   console.log ('it was clicked');
  //   this.menu2.nativeElement.classList.add('block');
  //   if ( this.counter > 1) {
  //     console.log ('Porra para isto');
  //     this.menu2.nativeElement.classList.remove('block');
  //     this.counter = 0;
  //   }
  // }


  constructor(private menu2: ElementRef) {
    this.menu2 = this.menu2.nativeElement;
   }

}
