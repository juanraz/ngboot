import { Component, OnInit, Inject } from '@angular/core';
import { MessagesService } from '../messages.service';
import { ConstantsService } from '../constants.service';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  private messages:[any];
  private chatWith:String = "";
  private currentChatWith:any = "";

  constructor(private messagesService:MessagesService) {

    this.messagesService.setUser$.subscribe(
                        user => {
                          this.currentChatWith = user.any;
                          this.chatWith = user.any.userName;
                          this.messagesService.getMessages(this.currentChatWith.id);
                        } 
                      );
    
    this.messagesService.initMessages$.subscribe(
                        messages => {
                          this.messages = messages.responseObject;
                        } 
                      );

    this.messagesService.setMessage$.subscribe(
                    message => {
                      this.messages.push(message.text);
                    } 
                  );

  }

  ngOnInit() {
  }

}
