import { Component, OnInit } from '@angular/core';
import { ChatWSService } from '../chat-ws.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private showUsers:boolean = true;

  constructor(private chatWSService:ChatWSService){}

  ngOnInit() {
    
  }
  toggle(){
    this.showUsers=!this.showUsers;
  }

}
