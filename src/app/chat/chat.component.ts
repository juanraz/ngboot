import { Component, OnInit } from '@angular/core';
import { ChatWSService } from '../chat-ws.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatWSService:ChatWSService){}

  ngOnInit() {
    this.chatWSService.sendStompMessage("content")
  }

}
