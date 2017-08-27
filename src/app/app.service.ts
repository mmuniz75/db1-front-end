import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions,  URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private static SERVER = "localhost:8080";

  private _serverkUrl = 'http://' + AppService.SERVER + '/checkPassword/';
    
  constructor(private _http: Http) { }

    
  checkPaswordMeter(password:String) : Observable<any>{
    
     return this._http.get(this._serverkUrl + password)
         .map((response: Response) => response.json())
        .catch(this.handleError);
  }

 private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.message || 'Server error');
 }

}  