import { equipa } from './mock/db_novo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-equipa',
  templateUrl: './nova-equipa.component.html',
  styleUrls: ['./nova-equipa.component.scss']
})
export class NovaEquipaComponent implements OnInit {

  team = equipa;

  constructor() { }

  ngOnInit(): void {
  }

}
