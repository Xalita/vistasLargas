import { Component, OnInit } from '@angular/core';

import {servicos} from './mock/mock-servicos';
import { cat } from './/mock/mock-categorias';

@Component({
  selector: 'app-novos-servicos',
  templateUrl: './novos-servicos.component.html',
  styleUrls: ['./novos-servicos.component.scss']
})
export class NovosServicosComponent implements OnInit {



  tipos = servicos;

  categorias: any = cat;

  isSameServico = false;

  servicoAtMom = '';

  getServico(e: any): void {
    this.servicoAtMom = e.innerHTML;
    console.log (e.innerHTML);
    console.log (this.servicoAtMom);
  }



  checkServicos(value: any): void{
    if (value === this.servicoAtMom) {
      this.isSameServico = true;
    }
    else {
      this.isSameServico = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}


