import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/UserService";
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   })
// };
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  users: User[];

  // healthresp : Object;
  // users: Observable<any> | undefined;

  constructor(private UserService: UserService) {

    this.users = []
  }

  ngOnInit() {
    // this.httpService.get('').subscribe(
    //   (response) => { this.posts = response; },
    //   (error) => { console.log(error); }
    //   );
  }

  testHealth(){

     this.UserService.getAllUsers().subscribe(data => {
       this.users = data;
     });


  }

}
