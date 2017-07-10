import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

  private apiUrl:String = 'http://localhost:8080/';
  private setSuccess;
  private currentUser:String = null;
  constructor(private http:Http, private route: ActivatedRoute,
  private router: Router) {
  }

  setCurrentUser(currentUser):void{
    this.currentUser = currentUser
  }

  getCurrentUser():any{
    return this.currentUser;
  }

  isSessionStarted():boolean{
    return null != this.currentUser;
  }

  getLoggedUsers():Promise<any> {
    
    if(!this.isSessionStarted()){
      this.router.navigateByUrl("/login");
      return null;
    }

    return  this.http.get(this.apiUrl+'users/'+this.getCurrentUser()).toPromise()
    .then(
      (res:Response) => res.json()
    )
    .catch(this.handleError);
  }

  addNewUser(userObject:any){
    console.log(userObject);
   this.http.post(this.apiUrl+'users',userObject).toPromise()
      .then(data => {
        console.log(data);
        for(var x in data){
          console.log(data[x]+" "+x);
        }
        this.router.navigateByUrl("/chat");
      })
      .catch(data => {
        alert(data);
      });
  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
  }

  registerFn(fn,fnName){
    eval("this."+fnName +" = "+ fn);
  }

  login(loginObj:any):any{
    return  this.http.get(this.apiUrl+'users/login/'+loginObj.userName+'/'+loginObj.password).toPromise()
    .then(
      (res:Response) => {
            //this.router.navigateByUrl("/chat");

        console.log(res);
      }
    )
    .catch((this.handleError)) ;
  }



}
