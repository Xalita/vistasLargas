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


  constructor( private mail:MailingService, private formbuild: FormBuilder) { }

  ngOnInit(): void {

    this.nodemail = this.formbuild.group({
      'name': ['', Validators.required],
      'tel': ['', Validators.required],
      'email':['', Validators.required],
      'msg': ['', Validators.required]
    })
  }

  sendMail() {

    this.mail.sendMessage(this.nodemail.value)
      .subscribe(data => {
        console.log(data);
        this.nodemail.reset();
      }, (error: any)=>{
        console.log('Error', error);
      })
  }



}
