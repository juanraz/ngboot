import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() current = "chat";
private isChat = "active";
private isAbout = "";
  constructor() {

   }

  openNave() {
    document.getElementById("mySidenav").style.width = "250%";
    document.getElementById("sendMessageContainet").style.visibility = "hidden";
  }
  
  ngOnInit() {
    if(this.current!="chat"){
      this.isChat = "";
      this.isAbout = "active";
    }
  }

}
