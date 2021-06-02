import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLines]'
})
export class LinesDirective {



  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }


  @Input('appLines') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}
