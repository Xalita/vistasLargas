import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


constructor(private facebookService: FacebookService){}

ngOnInit(): void {
  this.initFacebookService();
}

private initFacebookService(): void {
      const initParams: InitParams = { appId: '139634199535421', xfbml: true, version: 'v3.2'};
      this.facebookService.init(initParams);
}

}
