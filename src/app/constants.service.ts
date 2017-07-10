import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public ALL_FIELDS_REQUIRED_ERR:String = "All fields are required.";
  public USER_CREATED_SUCCESFULLY:String = "Account has been created.";
  public PROCESSING:String = "Processing request.";

  constructor() { }

}
