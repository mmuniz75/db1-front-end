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

  public checkPasswordMetter():void{
    if(this.password.length) 
      this._appService.checkPaswordMeter(this.password)
                      .subscribe (passwordScore => this.setMeter(passwordScore));
    else {
      this.passwordScore=0;
      this.passwordMeter = null;                   
    }  
  }

  private setMeter(score:Number):void{
    this.passwordScore = score;
    var passwordMeter = "";
    switch (true){
      case (score<=20):
        this.passwordMeter = PassWordMeter.VERY_WEEK;
      break;
      case (score>20 && score<=40):
      this.passwordMeter = PassWordMeter.WEEK;
      break;
      case (score>40 && score<=60):
      this.passwordMeter = PassWordMeter.GOOD;
      break;
      case (score>60 && score<=80):
      this.passwordMeter = PassWordMeter.STRONG;
      break;
      case (score > 80):
      this.passwordMeter = PassWordMeter.VERY_STRONG;
      break;   
    }
    
  } 

}

