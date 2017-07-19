import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

@Input() message:any;
private mouseOver:boolean = false;
private newMessage:String;

  constructor(private messagesService:MessagesService ) { 
      this.messagesService.updMessage$.subscribe(
        messageId => {
            this.finishUpdate(messageId);
        } 
      );

      this.messagesService.delMessage$.subscribe(
        messageId => {
          this.finishDelete(messageId);
        } 
      );

  }

  finishDelete(id:String){
    if(id==this.message.message.id){
      this.message.message.content = "*Message removed*";
      this.message.message.status = "deleted";
      this.toggleModal("deleteModal"+this.message.message.id,false);
    }

  }
  finishUpdate(id:String){
        if(id==this.message.message.id){
          this.message.message.content = this.newMessage;
          this.message.message.status = "update";
          this.toggleModal("editModal"+this.message.message.id,false);
        }
  }
  ngOnInit() {
  }

  showIcons(){
    this.mouseOver = true;
  }

  hideIcons(){
    this.mouseOver = false;
  }

  actionsVisible(user:String){
    return localStorage.getItem("user")==user&&this.mouseOver&&this.message.message.status!="deleted";    
  }
  toggleModal(modalId:string,show:boolean){
        document.getElementById(modalId).style.display = show?"block":"none";
        document.getElementById(modalId).style.paddingRight = "15px";
        if(modalId=="editModal"+this.message.message.id){
          this.newMessage = this.message.message.content;
        }
  }
  
  editMsg(id:String,message:String){
    
    this.messagesService.updateMessage(id,message);
  }

  deleteMsg(id:String){
        this.messagesService.deleteMessage(id);

  }

}
