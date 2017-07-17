import { Injectable,Inject,forwardRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService} from './constants.service';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

  private apiUrl:String       ;
  private currentUser:any     = null;
  private setSignUpSuccess    = new Subject<String>();
  private setLoginError       = new Subject<String>();
 
  setLoginError$ = this.setLoginError.asObservable();
  setSignUpSuccess$ = this.setSignUpSuccess.asObservable();
  constructor(private http:Http, private route: ActivatedRoute,
              @Inject(forwardRef(() => ConstantsService))
              private cons:ConstantsService, private router: Router) {
                this.apiUrl = this.cons.apiUrl;
  }

  _setSignUpSuccess(){
    this.setSignUpSuccess.next();
  }

  _setLoginError(errorMessage:String){
    this.setLoginError.next(errorMessage);
  }

  setCurrentUser(currentUser):void{
    this.currentUser = currentUser
  }

  getCurrentUser():any{
    return this.currentUser;
  }

  isSessionStarted():boolean{
    return "null" !== localStorage.getItem("user")&&null !== localStorage.getItem("user");
  }

  getLoggedUsers():Promise<any> {
    if(!this.isSessionStarted()){
      this.router.navigateByUrl("/login");
    }

    return  this.http.get(this.apiUrl+'users/'+this.getCurrentUser()).toPromise()
    .then(
      (res:Response) =>  res.json()
    )
    .catch(this.handleError);
  }

  addNewUser(userObject:any){
   this.http.post(this.apiUrl+'users',userObject).toPromise()
      .then(data => {
        this._setSignUpSuccess();
        setTimeout(()=>{ this.router.navigateByUrl("/login"); }, 4000)
      })
      .catch(data => {
        this.handleError;
      });
  }


  login(loginObj:any):any{
    return  this.http.get(this.apiUrl+'users/login/'+loginObj.userName+'/'+loginObj.password).toPromise()
    .then(
      (res:Response) => {
        var data:any = res.json();
        if(data.success){
          console.log(data.responseObject);
          localStorage.setItem("user",data.responseObject.id);
          this.router.navigateByUrl("/chat");        
        }else{
          this._setLoginError(this.cons.LOGIN_FAILED);
        }
      }
    )
    .catch((this.handleError)) ;
  }

  public handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
  }



}
