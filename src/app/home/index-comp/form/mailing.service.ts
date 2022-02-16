import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Mail } from './model/mailModel';


@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(private http: HttpClient) { }

  private mail: Mail[] = [];
  private mailUpdated = new Subject<Mail[]>();


  // addPost (name: string, mail: string,msg: string, tel: number) {
  //   const post = {
  //     id:null,
  //     name:name,
  //     mail: mail,
  //     tel: tel,
  //     msg: msg
  //   }
  //   this.http.post <{message:string, postID:any}>('http://localhost:3000/api/submit',post)
  //     .subscribe((respData) => {
  //       const postId = respData.postID;
  //       post.id = postId;
  //       this.mail.push(post);
  //       this.mailUpdated.next([...this.mail]);
  //     })

  // }

url = 'http://localhost:3000/send';

  sendMessage (body: any) {
    return this.http.post(this.url,
      JSON.stringify(body),
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' });
  }




}
