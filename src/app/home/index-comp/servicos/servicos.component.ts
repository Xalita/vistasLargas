import { servicos } from './../novos-servicos/mock/mock-servicos';
import { cat } from './mock/mock-categorias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {


  serv = servicos;

  categorias = cat;

  constructor() { }

  ngOnInit(): void {
  }

}
