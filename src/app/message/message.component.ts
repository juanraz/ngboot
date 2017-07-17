import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private message:String;

  constructor(private messagesService:MessagesService) { }

  sendMessage(){
    var currentUser:String = localStorage.getItem("user");
    this.messagesService.sendMessage(currentUser,this.messagesService.receiverId,this.message);
  }

  ngOnInit() {
  }

}
