import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { SlideComponent } from './slide/slide.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ServicosComponent } from './servicos/servicos.component';
import { FormComponent } from './form/form.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NovosServicosComponent } from './novos-servicos/novos-servicos.component';
import { EquipaComponent } from './equipa/equipa.component';
import { PortfolioComponent } from './novos-servicos/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    SlideComponent,
    RodapeComponent,
    ServicosComponent,
    FormComponent,
    ContactosComponent,
    NovosServicosComponent,
    EquipaComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
