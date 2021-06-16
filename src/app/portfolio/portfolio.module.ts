import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortHomeComponent } from './port-home/port-home.component';
import { GridImagesComponent } from './grid-images/grid-images.component';


@NgModule({
  declarations: [
    PortHomeComponent,
    GridImagesComponent
    ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
    ]
})
export class PortfolioModule { }
