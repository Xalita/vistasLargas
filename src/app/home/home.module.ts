import { RodapeComponent } from './index-comp/rodape/rodape.component';
import { EquipaComponent } from './index-comp/equipa/equipa.component';
import { FormComponent } from './index-comp/form/form.component';
import { NovosServicosComponent } from './index-comp/novos-servicos/novos-servicos.component';
import { SlideComponent } from './index-comp/slide/slide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexCompComponent } from './index-comp/index-comp.component';


@NgModule({
  declarations: [
    IndexCompComponent,
    SlideComponent,
    NovosServicosComponent,
    FormComponent,
    EquipaComponent,
    RodapeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
