import { servicos } from './../novos-servicos/mock/mock-servicos';
import { cat } from './mock/mock-categorias';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Input } from 'hammerjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {





  serv = servicos;

  categorias = cat;
  obj: any;
  isHover = false;

  imagem: any = () => {

    for (let i = 0; i < this.categorias.length; i++) {
      this.categorias[i].isHovered = true;
      // console.log(this.categorias[i].isHovered);
    }

  }

  changePhoto(obj: any): any {

      const hover = obj.isHovered;
      // console.log (obj);
      if (!hover) {
        // console.log (obj.imgPath);
        return obj.imgPath;
      } else if (hover)  {
        return obj.imgPath2;

      }
  }

  checkHover(item: any): any {
    // for (let i = 0; i < this.categorias.length; i++) {
    //   this.item[i].isHovered = !this.categorias[i].isHovered;

    //   console.log (i);
    // }
    item.isHovered = !item.isHovered;
    // console.log (item);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
