import { Component, OnInit, Inject, Provider } from '@angular/core';
import { ChatService } from '../chat.service';
import { ConstantsService } from '../constants.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  private loggedUsers:any;
  private displayingUsers:any;
  private currentPage:number = 0;
  private totalPages:number = 0;
  private byPage:number = 10;

  constructor(private chatService:ChatService,private messagesService:MessagesService) {
   }

  ngOnInit() {
    this.chatService.getLoggedUsers().then(data=> { 
        this.loggedUsers = data.responseObject;
            var totalUsers:number = this.loggedUsers.length;
            this.totalPages=Math.ceil(totalUsers/this.byPage);
        this.setPage(1);
        if(totalUsers>0){
          this.messagesService._setUser(this.loggedUsers[0]);
        }
      });
  }

  next(){
    if(this.currentPage<this.totalPages){
      this.currentPage++;
      this.setPage(this.currentPage);
    }
  }
  prev(){
    if(this.currentPage>1){
      this.currentPage--;
      this.setPage(this.currentPage);
    }
  }
  setPage(page:number){
            this.displayingUsers = this.loggedUsers.slice(page-1,page+(this.byPage-1));
            this.currentPage  = page;
            
  }


}
