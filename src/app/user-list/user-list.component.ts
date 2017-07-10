import { Component, OnInit, Inject, Provider } from '@angular/core';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[ChatService]
})
export class UserListComponent implements OnInit {

  
  private loggedUsers:any;

  constructor(@Inject(ChatService) private chatService:ChatService) {
   }

  ngOnInit() {
    this.chatService.getLoggedUsers().then(data=> {this.loggedUsers = data; console.log(data)});
  }

}
