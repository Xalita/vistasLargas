import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MailingService } from './mailing.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // budget!: FormGroup;

  nodemail!: FormGroup;


  constructor() { }

  ngOnInit(): void {


  }


  }



}
