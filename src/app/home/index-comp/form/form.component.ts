import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // budget!: FormGroup;

  nodemail!: FormGroup;

  name = new FormControl('');
  tel = new FormControl ('');
  mail = new FormControl ('');

  constructor() { }

  ngOnInit(): void {


  }

    sendMail() {
      console.log (this.name);
      console.log (this.tel);
    }

  }




