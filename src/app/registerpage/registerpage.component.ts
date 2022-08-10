import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../services/http.service";
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  clickMessage = '';
  constructor(private httpService: HttpService) { }
  title = 'Article by Jeetendra';
  posts : any;
  ngOnInit() {
    this.httpService.get('').subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
  }

  // registerButton(message: string){
  //   this.clickMessage = "Congrats " + message + " has now been successfully registered"
  // }

  registerButton(username: string, email: string,password: string,firstname: string,lastname: string,phone: string){

  const  bodyMessage = {
      username: username,
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone
    };

    this.clickMessage = "Congrats " + username + " has now been successfully registered"

    return  this.httpService.post( bodyMessage, "users/register" );

  }



}
