import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {Http, Headers, Request, Response, RequestOptions,RequestMethod} from "@angular/http";

@Injectable()
export class BaseService {
  
  protected headers = new Headers();
  protected options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http) { }

  protected sendRequest(verb:RequestMethod,url: string, params?): Observable<any>
  {
    return this.http.request(new Request({
        method: verb,
        url: url,
        params:params,
        headers:this.headers})).map((response)=>  this.ExtractData(response));
  }

  protected ExtractData(res: Response)
  {
    if (res.status < 200 || res.status >= 300)
        throw new Error('Response error:' + res.status);
    let result = res.json();
    return result || {};
  }

  protected handleError(error: any)
  {
    let errMsg = error.message || 'Server error';
    console.debug(errMsg);
  }
}
