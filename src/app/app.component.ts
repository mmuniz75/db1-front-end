import { Component } from '@angular/core';

import { AppService } from './app.service';

export enum PassWordMeter{
  VERY_WEEK = 1,
  WEEK = 2,
  GOOD = 3,
  STRONG = 4,
  VERY_STRONG = 5
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  
  passwordScore : Number = 0;
  passwordMeter : PassWordMeter;
  password : String ;
  
  constructor(private _appService: AppService) {
   }

  checkPasswordMetter():void{
    this.passwordScore = this._appService.checkPaswordMeter(this.password);
        
    switch (true){
      case (this.passwordScore<=20):
       this.passwordMeter = PassWordMeter.VERY_WEEK;
       break;
      case (this.passwordScore>20 && this.passwordScore<=40):
       this.passwordMeter = PassWordMeter.WEEK;
       break;
      case (this.passwordScore>40 && this.passwordScore<=60):
       this.passwordMeter = PassWordMeter.GOOD;
       break;
      case (this.passwordScore>60 && this.passwordScore<=80):
       this.passwordMeter = PassWordMeter.STRONG;
       break;
      case (this.passwordScore > 80):
       this.passwordMeter = PassWordMeter.VERY_STRONG;
       break;   
    }
  }
}

