import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from  '@angular/core';
import {User} from "../models/user";
import {UserRequest} from "../requestObjects/UserRequest";


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

  getOneUser(request: UserRequest) {
    const params = new HttpParams()
      .set('username', request.username);
    let fullUrl = this.usersUrl + "get-one-user-param";
    return this.http.get<User>(fullUrl, {params});
  }

  register( params: User) {
    let fullUrl = this.usersUrl + "register";
    return this.http.post<User>(fullUrl,params);

  }
}
