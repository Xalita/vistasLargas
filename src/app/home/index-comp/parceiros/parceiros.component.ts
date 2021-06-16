import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
