import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookComponent } from './facebook/facebook.component';



@NgModule({
  declarations: [RodapeComponent, FooterComponent, FacebookComponent],
  imports: [
    CommonModule
  ],
  exports: [RodapeComponent, FooterComponent]
})
export class SharedModule { }
