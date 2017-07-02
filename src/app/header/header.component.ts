import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {


   }

    openNave() {
    document.getElementById("mySidenav").style.width = "250%";
    document.getElementById("sendMessageContainet").style.visibility = "hidden";
    }
  ngOnInit() {
  }

}
