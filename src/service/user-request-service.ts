import {Injectable} from "@angular/core";
import {Observable, timeout} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {environment} from "../environments/environment";
import {UserResponceModel} from "../model/user-responce-model";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService
{
  user:UserResponceModel|undefined;
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
    console.log(this.user?.id)
    this.auth()

    console.log(this.user?.id)

  }
  async auth() {
    const apiData: Observable<AjaxResponse<UserResponceModel>> = ajax({
      url: environment.serverUrl + "/auth",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        login: this._login,
        password: this._password,
      }
    });
    apiData.subscribe({
      next: _ => {
        this.user = _.response      }
    })
  }
}
