import { Injectable } from '@angular/core';
import {Http, Headers, Request, Response, RequestOptions,RequestMethod} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {User} from "./user";
import {BaseService} from './base.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService extends BaseService {

  constructor(http:Http) {
    super(http);
 }


  public getRandomUser(): Observable<User>
  {
    return this.sendRequest(RequestMethod.Get,"/api")
      .map((response)=>this.ExtractRandomUser(response))
  }



  public getUser(seed: string): Observable<User>
  {
      return this.sendRequest(RequestMethod.Get,"/api",{seed:seed})
      .map((response)=>this.ExtractRandomUser(response))
  }

  private ExtractRandomUser(res)
  {
    let user = new User();
    user.picture = res.results[0].picture.medium;
    user.dob = res.results[0].dob;
    user.email = res.results[0].email;
    user.name = res.results[0].name.title+' '+res.results[0].name.first+' '+res.results[0].name.last;
    user.seed = res.info.seed;
    user.phone= res.results[0].phone;
    return user;
  }

}
