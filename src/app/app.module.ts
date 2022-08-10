import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserpageComponent } from './user-page/userpage.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    AdminpageComponent,
    RegisterpageComponent,
    MainpageComponent,
    PagenotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
