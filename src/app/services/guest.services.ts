import Guest from '../models/guest.models'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()//required to allow services to be pasted around
export class GuestService {

  api_url = 'http://localhost:3000';
  guestUrl = `${this.api_url}/api/guests`;

  constructor(private http: HttpClient) { }

//Create guest, takes a Guest Object

createGuest(guest: Guest): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.guestUrl}`, guest);
  }

//Read guest, takes no arguments
getGuests(): Observable<Guest[]>{
    return this.http.get(this.guestUrl)//this function returns an observable
    .pipe(map(res  => {
      //Maps the response object sent from the server
        //map is success we are not handling errors in this example
      return res["data"].docs as Guest[];
    }))
  } 

//Update guest, takes a Guest Object as parameter makes a put request
editGuest(guest:Guest){
    let editUrl = `${this.guestUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, guest);
  } 
//delete guest
deleteGuest(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.guestUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //currently not being used
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}