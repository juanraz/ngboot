import { Injectable,Inject,forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ConstantsService} from './constants.service';
import { ChatService} from './chat.service';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class GroupService {
  private setMessage = new Subject<any>();
  private setGroup = new Subject<any>();
  private initMessages = new Subject<any>();
  private apiUrl:String ;
  public receiverId:String;

  setMessage$ = this.setMessage.asObservable();
  setGroup$ = this.setGroup.asObservable();
  initMessages$ = this.initMessages.asObservable();

  constructor(@Inject(forwardRef(() => ConstantsService))
              private cons:ConstantsService,
              private chatService:ChatService,
              private http:Http
              ) {
                  this.apiUrl = cons.apiUrl;
               }

    _initMessages(messages:any){
        this.initMessages.next(messages);
    }
    _setGroup(user:any){
        this.receiverId = user.id;
        this.setGroup.next({ any:user });
    }

    _setMessage(message: any) {
        this.setMessage.next({ text: message });
    }

    getMessages(userId:String){
        console.log(this.apiUrl+'messages/conversation/'+localStorage.getItem("user")+"/"+userId);
         this.http.get(this.apiUrl+'messages/conversation/'+localStorage.getItem("user")+"/"+userId).toPromise()
            .then(
            (res:Response) =>  {
                                this._initMessages(res.json());
                                }
            )
            .catch(this.chatService.handleError);
        }
    
    sendMessage(userId:String,receiverId:String,content:String)
     {
         console.log(this.apiUrl+'messages/create');
       this.http.post(this.apiUrl+'messages/create',{'from':userId,'to':receiverId,'message':content}).toPromise()
      .then(data => {
        this._setMessage(data.json().responseObject);
        
      })
      .catch(data => {
        this.chatService.handleError;
      });
    }
    pushMessage(message:any){
        this._setMessage(message);
    }
   
    getGroups():Promise<any> {
    if(this.chatService.isSessionStarted()){
      return  this.http.get(this.apiUrl+'users/'+localStorage.getItem("user")).toPromise()
      .then(
        (res:Response) =>  res.json()
      )
      .catch(this.chatService.handleError);      
      }
  }
}
