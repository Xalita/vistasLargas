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
import { ServicosComponent } from './index-comp/servicos/servicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexCompComponent,
    SlideComponent,
    NovosServicosComponent,
    FormComponent,
    EquipaComponent,
    ParceirosComponent,
    ServicosComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class HomeModule { }
