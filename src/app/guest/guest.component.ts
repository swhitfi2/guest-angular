import { Response } from '@angular/http';
import { GuestService } from '../services/guest.services';
import Guest from '../models/guest.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})

export class GuestComponent implements OnInit {
  
  constructor(
    //Private guestservice will be injected into the component by Angular Dependency Injector
    private guestService: GuestService
  ) { }

  //Declaring the new guest Object and initilizing it
  public newGuest: Guest = new Guest()

  //An Empty list for the visible guest list
  //instatiates an empty array to allow methods to have aa holding 
  guestsList: Guest[];
  editGuests: Guest[] = []; // the equals [] 
  

//calls the service ask the service for the guests
  ngOnInit(): void {

    //At component initialization the 
    this.guestService.getGuests()
      .subscribe(guests => {
        //assign the guestlist property to the proper http response
        this.guestsList = guests
        console.log(guests)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        this.newGuest = new Guest() /// this allows the new guest in form to clear the fields
      })
  }

  //edit function
  editGuest(guest: Guest) {
    console.log(guest)//debug code line to see values
     if(this.guestsList.includes(guest)){ // is this a guest retrieved from the api
      if(!this.editGuests.includes(guest)){ //is this in the list to be edited
        this.editGuests.push(guest) //if not in the list add to edit list
      }else{
        this.editGuests.splice(this.editGuests.indexOf(guest), 1)// remove this element from the array get the right guests
        this.guestService.editGuest(guest).subscribe(res => { // call to service
          console.log('Update Succesful')
         }, err => {
            //this.editGuest(guest)
            console.error('Update Unsuccesful')
          })
        }
      }
    }
//updating the status to complete change status to done
    doneGuest(guest:Guest){
      guest.status = 'Done'
      this.guestService.editGuest(guest).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        //this.editGuest(guest)
        console.error('Update Unsuccesful')
      })
    }

    //listening for the enter key event if selected edit guest field
    submitGuest(event, guest:Guest){
      if(event.keyCode ==13){ // keycode ==13 is the enter key
        this.editGuest(guest)
      }
    }

    //delete function
    deleteGuest(guest: Guest) {
      this.guestService.deleteGuest(guest._id).subscribe(res => {
        this.guestsList.splice(this.guestsList.indexOf(guest), 1);
        //betterway can ask api for the list
      })
    }

}