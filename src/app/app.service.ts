import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions,  URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private static SERVER = "localhost:8080";

  private _serverkUrl = 'http://' + AppService.SERVER + '/checkPassword?password=';
    
  constructor(private _http: Http) { }

    checkPaswordMeter(password:String) : Number{
        switch(password.length) {
            case 1 :
                return 19;
            case 2:
                return 39;
            case 3:
                return 61;       
            case 4:
                return 81;    
            case 5:
                return 100;
            default:
                return 0;
        }        
    }    
/*
  checkPaswordMeter(password:String) : Observable<Number>{
    
     return this._http.get(this._serverkUrl + password)
        .map((response: Response) => <Number> response.json().percente)
        //.do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
  }
*/
 private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.message || 'Server error');
 }

}  