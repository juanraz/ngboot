import { Component, OnInit,Inject } from '@angular/core';
import { NgForm, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { ConstantsService} from '../constants.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ChatService,ConstantsService]
})
export class LoginComponent implements OnInit {
  private loginError:String;
  private showLoginError:boolean; 

  constructor(  private route: ActivatedRoute,
                private  router: Router,
                @Inject(ChatService) private chatService:ChatService, 
                @Inject(ConstantsService) private constantsService:ConstantsService) { 

                  this.chatService.setLoginError$.subscribe(
                    errorMessage => {
                      this.setError(errorMessage,true);
                    } 
                  );

                }

  validate(form:any){
      var res:boolean = true;

      for(var x in form){
        if(form[x]==""){

          this.setError(this.constantsService.ALL_FIELDS_REQUIRED_ERR,true);
          res = false;
          break;
        }
      }
      return res;
  }



  setError(error:String,show:boolean):void{
    this.loginError     = error;
    this.showLoginError = show; 
  }
  login(form:any){
        this.setError(this.constantsService.PROCESSING,true);

        if(this.validate(form)){
          var res = this.chatService.login({
            "password":   form.password,
            "userName":   form.userName
          });
          console.log(res);
    }
  }

  ngOnInit() {
    localStorage.setItem("user",null);
  }

}
