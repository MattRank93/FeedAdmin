import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/UserService";
import { User } from '../models/user';
// import {HttpService} from "../services/http.service";
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  clickMessage = '';
  constructor(private httpService: UserService) { }
  ngOnInit() {
  }


  registerButton(username: string, email: string,password: string,firstname: string,lastname: string,phone: string){

    const bodyMessage:  User = {
      username: username,
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone
    };

    this.clickMessage = "Congrats " + username + " has now been successfully registered"

    return  this.httpService.register( bodyMessage ).subscribe();

  }



}
