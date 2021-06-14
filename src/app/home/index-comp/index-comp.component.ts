import { equipa } from './nova-equipa/mock/db_novo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-comp',
  templateUrl: './index-comp.component.html',
  styleUrls: ['./index-comp.component.scss']
})
export class IndexCompComponent implements OnInit {

  teams = equipa;



  constructor() { }

  ngOnInit(): void {
  }

}
