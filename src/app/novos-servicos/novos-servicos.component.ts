import { Component, OnInit } from '@angular/core';

import {servicos} from "./mock-servicos";
import { cat } from "./mock-categorias";

@Component({
  selector: 'app-novos-servicos',
  templateUrl: './novos-servicos.component.html',
  styleUrls: ['./novos-servicos.component.scss']
})
export class NovosServicosComponent implements OnInit {



  tipos = servicos;

  categorias:any = cat;

  isSameServico= false;

  servicoAtMom="";

  getServico(e:any) {  
    this.servicoAtMom = e.innerHTML;
    console.log (e.innerHTML);
    console.log (this.servicoAtMom);
  }

  checkServicos(value:any){
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


