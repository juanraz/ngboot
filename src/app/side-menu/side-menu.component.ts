import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

   private contactVisibility:boolean = false;
   

  constructor() { 

  }
    
    closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sendMessageContainet").style.visibility = "visible";
    }

    switchContacts(){
      this.contactVisibility = !this.contactVisibility;
    }
  ngOnInit() {
  }

}
