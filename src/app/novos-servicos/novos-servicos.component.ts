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

  // isVinilOn = false;
  // isEspelhadoOn = false;
  // isDispensadorOn=false;
  // isLaserOn=false;
  // isAcrilicoOn=false;
  // isDecoracaoOn=false;

  


  // getServico(value:any) {   

  //   if (value === 'vinil') {
  //     this.isVinilOn = !this.isVinilOn;
  //     console.log(`Isto é do vinil ${this.isVinilOn}`);
  //   } else if (value === 'espelhado') {
  //     this.isEspelhadoOn = !this.isEspelhadoOn;
  //     console.log(`Isto é do espelhado ${this.isEspelhadoOn}`);
  //   } else if (value === 'dispensador') {
  //     this.isDispensadorOn = !this.isDispensadorOn;
  //   } else if (value === 'laser') {
  //     this.isLaserOn = !this.isLaserOn;
  //   } else if(value === 'acrilicos') {
  //     this.isAcrilicoOn = ! this.isAcrilicoOn;
  //   } else if (value === 'decoracao') {
  //     this.isDecoracaoOn=!this.isDecoracaoOn;
  //   }
    
    // for(let i = 0; i<this.categorias.length; i++){
    // if(value[i].nome == 'vinil') {         
    //      value[i].isTrue = !value[i].isTrue; 
    //      console.log (`Isto é do Vinil ${value[i].isTrue}` );
    //      this.isVinilOn = !this.isVinilOn;  
    //    }          
    // } 
    // else if (value == 'espelhado') {
    //   this.isEspelhadoOn = !this.isEspelhadoOn;
    //   console.log (`O Espelhado é ${this.isEspelhadoOn}`)
    //   this.isVinilOn = false;
    // }
      // }
      // if (value[i].isTrue === false) {
      //   value[i].isTrue = true;
      //   console.log (value[i].isTrue);
      // } else {
      //   value[i].isTrue = false;
      // }
    // }

  servicoAtMom=""

  getServico(e:any) {  
    this.servicoAtMom = e.innerHTML;
    console.log (e.innerHTML);
    console.log (this.servicoAtMom);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


