import { Component, OnInit, Input } from '@angular/core';

import { TEAM } from './db_equipa';

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.scss']
})
export class EquipaComponent implements OnInit {

  equipa = TEAM;



  constructor() { }

  ngOnInit(): void {


}
}
