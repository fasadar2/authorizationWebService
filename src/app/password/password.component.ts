import { Component } from '@angular/core';
import {UserRequestModel} from "../../model/user-request-model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatError, MatFormField} from "@angular/material/form-field";
import {UserRequestService} from "../../service/user-request-service";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatError,
    MatFormField,
    MatInput
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  password_form = new FormControl('', [Validators.required]);
  errorMessage = '';

  constructor(private _Activatedroute: ActivatedRoute,private user: UserRequestService,private routing:Router) {
    merge(this.password_form.statusChanges, this.password_form.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.password_form.hasError('required'))
    {
      this.errorMessage = 'Необходимо ввести пароль';
    }
    else
    {
      this.errorMessage = '';
    }
  }
  auth(){
    console.log(this.password_form.value)
    if (!this.password_form.invalid)
    {
      if (this.password_form.value != null) {
        this.user.password = this.password_form.value
        this.user.authorise()
      }

    }

  }
}
