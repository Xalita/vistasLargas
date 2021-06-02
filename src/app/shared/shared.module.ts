import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookComponent } from './facebook/facebook.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { LinesDirective } from './lines.directive';



@NgModule({
  declarations: [RodapeComponent, FooterComponent, FacebookComponent, HoverEffectDirective, LinesDirective],
  imports: [
    CommonModule
  ],
  exports: [RodapeComponent, FooterComponent, HoverEffectDirective, LinesDirective]
})
export class SharedModule { }
