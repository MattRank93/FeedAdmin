import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserpageComponent} from './user-page/userpage.component';
import {AdminpageComponent} from './adminpage/adminpage.component';
import {RegisterpageComponent} from './registerpage/registerpage.component';
import {MainpageComponent} from './mainpage/mainpage.component';

import {AppComponent} from './app.component';

import {Routes, RouterModule} from "@angular/router";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: PagenotfoundComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


