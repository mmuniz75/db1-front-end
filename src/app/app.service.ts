import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions,  URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  private static SERVER = environment.SERVER_URL + ":" + environment.SERVER_PORT;

  private _serverkUrl = 'http://' + AppService.SERVER + '/checkPassword/';
    
  constructor(private _http: Http) { }

    
  checkPaswordMeter(password:String) : Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers ,method: "post"});
    
    let data = new URLSearchParams();
    data.set('password',password.toString());
    
     return this._http.post(this._serverkUrl,data,options)
         .map((response: Response) => response.json())
        .catch(this.handleError);
  }

 private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.message || 'Server error');
 }

}  