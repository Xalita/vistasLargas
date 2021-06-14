import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appItem]'
})
export class ItemDirective {

  constructor(tpl: TemplateRef<any>) { }

}
