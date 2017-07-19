import { Component, OnInit, Inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  signUpForm  :any;
  showErrorMessage:boolean = false;
  errorMessage:String = "";
  showSuccessMessage:boolean = false;
  successMessage:String = "";
  firstName:String;
  lastName:String;
  isPremium:boolean;
  modal:boolean = false;

  constructor(@Inject(ChatService) private chatService:ChatService, 
              @Inject(ConstantsService) private cons:ConstantsService) { }


  ngOnInit() {
        this.chatService.isSessionStarted();
        this.firstName  = localStorage.getItem("firstName");
        this.isPremium  = "true"==""+localStorage.getItem("isPremium");
        console.log(this.isPremium);
        console.log(localStorage.getItem("isPremium"));
        console.log("true"==""+localStorage.getItem("isPremium"));
        this.lastName   = localStorage.getItem("lastName");
  }

  delete(){
    this.chatService.deleteUser(localStorage.getItem("user"))
  }

  toggleModal(show:boolean){
        this.modal = show;
        document.getElementById("modal").style.display = this.modal?"block":"none";
        document.getElementById("modal").style.paddingRight = "15px";

  }

  
   validate(form:any){
      var res:boolean = true;
      
      for(var x in form){
                  
        if(form[x]==""&&x!="isPremium"){
          this.setError(this.cons.ALL_FIELDS_REQUIRED_ERR,true);
          res = false;
          break;
        }
      }
      if(res&&form.password!=form.verificatepassword){
          this.setError(this.cons.PASSWORD_DOES_NOT_MATCH,true);
      }
      return res;
  }

  setError(errorMessage:String,show:boolean){
    this.showErrorMessage = show;
    this.errorMessage = errorMessage;
  }

  signUp(form:any){
     this.setError(this.cons.PROCESSING,true);
    if(this.validate(form)){
      this.chatService.updateUser(          {
            "firstName":  form.firstName,
            "lastName":   form.lastName,
            "password":   form.password,
            "isPremium":  form.isPremium,
            "userName":   localStorage.getItem("user")

          });
    }

 }
}