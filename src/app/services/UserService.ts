import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from  '@angular/core';
import {config} from "rxjs";
import {User} from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn:  'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {

    this.usersUrl = 'http://localhost:7886/users/';

  }

  getAllUsers() {
    let fullUrl = this.usersUrl + "get-all-users";
    return this.http.get<User[]>(fullUrl);
  }

  register( params: User) {
    let fullUrl = this.usersUrl + "get-all-users";
    return this.http.post<User>(fullUrl,params);

  }
}
