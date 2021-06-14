import { SharedModule } from './../shared/shared.module';
import { EquipaComponent } from './index-comp/equipa/equipa.component';
import { FormComponent } from './index-comp/form/form.component';
import { NovosServicosComponent } from './index-comp/novos-servicos/novos-servicos.component';
import { SlideComponent } from './index-comp/slide/slide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexCompComponent } from './index-comp/index-comp.component';
import { ParceirosComponent } from './index-comp/parceiros/parceiros.component';
import { CarouselComponent } from './index-comp/nova-equipa/nova-equipa.component';
import { ItemDirective } from './index-comp/equipa/directives/item.directive';

@NgModule({
  declarations: [
    IndexCompComponent,
    SlideComponent,
    NovosServicosComponent,
    FormComponent,
    EquipaComponent,
    ParceirosComponent,
    CarouselComponent,
    ItemDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule { }
