import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/UserService";
import {UtilityService} from "../services/UtilityService";

import { User } from '../models/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HealthResponse} from "../responseObjects/HealthResponse";
import {UserRequest} from "../requestObjects/UserRequest";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  users: User[];
  user: User = new User();
  healthResp: HealthResponse = new  HealthResponse();


  constructor(private userService: UserService, private utilityService: UtilityService) {

    this.users = []
  }

  ngOnInit() {
  }

  getAllUsers(){

     this.userService.getAllUsers().subscribe(data => {
       this.users = data;
     });


  }

  getOneUser(username: string){
    const bodyMessage: UserRequest = {
      username: username,
    };
    this.userService.getOneUser(bodyMessage).subscribe(data => {
      this.user = data;
    });


  }
  health(){

    this.utilityService.gethealth().subscribe(data => {
        this.healthResp = data;
      }
    );


  }

}
