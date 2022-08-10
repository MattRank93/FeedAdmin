import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from  '@angular/core';
import {User} from "../models/user";
import {HealthResponse} from "../responseObjects/HealthResponse";


@Injectable({
  providedIn:  'root'
})
export class UtilityService {
  private usersUrl: string;

  constructor(private http: HttpClient) {

    this.usersUrl = 'http://localhost:7886/';

  }

  gethealth() {
    let fullUrl = this.usersUrl + "health";
    return this.http.get<HealthResponse>(fullUrl);
  }


}
