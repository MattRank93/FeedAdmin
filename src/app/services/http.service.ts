import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from  '@angular/core';
import {config} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn:  'root'
})
export class HttpService {

  private configUrl= 'http://localhost:3000/';
  // private headers: HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  // private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  get(url:string) {
    let fullUrl = this.configUrl + url;
    return this.http.get(fullUrl);
  }

  post( params: any, url: string) {
    // return this.http.post(this.configUrl,params, {this.headers})
  }
}
