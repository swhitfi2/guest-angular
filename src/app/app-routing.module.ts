import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component';
import {GuestComponent } from './guest/guest.component';
import {AboutComponent } from './about/about.component';
import {GuestHistoryComponent } from './guesthistory/guesthistory.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'guests', component: GuestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guesthistory', component: GuestHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
