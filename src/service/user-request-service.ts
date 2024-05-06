import {Injectable} from "@angular/core";
import {UserRequestModel} from "../model/user-request-model";
import {Observable} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {environment} from "../environments/environment";
import {UserResponceModel} from "../model/user-responce-model";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService
{
  user:UserResponceModel|undefined = undefined;
  get password(): string {
    return <string>this._password;
  }

  set password(value: string) {
    this._password = value;
  }
  get login(): string {
    return <string>this._login;
  }

  set login(value: string) {
    this._login = value;
  }
  private _login:string="";
  private _password:string="";
  authorise()
  {
    let user_request:UserRequestModel = new UserRequestModel(this._login,this._password);
    let apiData = this.auth(user_request)
    console.log(apiData)

  }
  async auth(user_request: UserRequestModel | undefined) {
    const request: Observable<AjaxResponse<UserResponceModel>> = ajax({
      url: environment.serverUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        login: user_request?.login,
        password: user_request?.password,
      }
    });
    return request.subscribe({
      next: _ => {
        this.user = _.response;
      }
    })
  }
}
