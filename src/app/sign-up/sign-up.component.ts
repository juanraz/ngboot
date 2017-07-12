import { Component, OnInit, Inject, Provider } from '@angular/core';
import { NgForm, Validators, AbstractControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import { ConstantsService} from '../constants.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.css' ],
  providers:[ChatService,ConstantsService]
})
export class SignUpComponent implements OnInit {

  signUpForm  :any;
  showErrorMessage:boolean = false;
  errorMessage:String = "";
  showSuccessMessage:boolean = false;
  successMessage:String = "";

  constructor(
              @Inject(ChatService) private chatService:ChatService, 
              @Inject(ConstantsService) private cons:ConstantsService) {

                  this.chatService.setSignUpSuccess$.subscribe(
                    () => {
                      this.setSuccess();
                    }
                  );
   }

  ngOnInit() {
  }

  setSuccess(){
    this.showSuccessMessage = true;
    this.successMessage = this.cons.USER_CREATED_SUCCESFULLY;
    this.showErrorMessage = false;
    this.errorMessage = "";
  }

  setError(errorMessage:String,show:boolean){
    this.showErrorMessage = show;
    this.errorMessage = errorMessage;
  }

  validate(form:any){
      var res:boolean = true;
      
      for(var x in form){
        if(form[x]==""){
          this.setError(this.cons.ALL_FIELDS_REQUIRED_ERR,true);
          res = false;
          break;
        }
      }
      return res;
  }

  signUp(form:any){
     this.setError(this.cons.PROCESSING,true);

    if(this.validate(form)){
      this.chatService.addNewUser(          {
            "email":      form.email,
            "firstName":  form.firstName,
            "lastName":   form.lastName,
            "password":   form.password,
            "userName":   form.userName
          });
    }

  }

}
