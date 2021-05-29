import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosHomeComponent } from './contatos-home/contatos-home.component';


@NgModule({
  declarations: [
    ContatosHomeComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    SharedModule
  ]
})
export class ContatosModule { }
