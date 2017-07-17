import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public ALL_FIELDS_REQUIRED_ERR:String = "All fields are required.";
  public PROCESSING:String = "Processing request.";
  public USER_CREATED_SUCCESFULLY:String = "Account has been created. In few seconds you will be redirect...";
  public LOGIN_FAILED:String = "User not exists or password is not valid, please try again.";
  public apiUrl = "http://localhost:8080/";

  constructor() { }

}
