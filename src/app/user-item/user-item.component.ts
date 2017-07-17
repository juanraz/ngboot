import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user:any;
  
  constructor(private messagesService:MessagesService) { }

  ngOnInit() {

  }
  
  userSelected(user:any){
        this.messagesService._setUser(user);
  }

}
