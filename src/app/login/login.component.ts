import { Component } from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatButton} from "@angular/material/button";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRequestService} from "../../service/user-request-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    MatInput,
    MatSuffix,
    MatInput,
    MatFormField,
    MatHint,
    MatInput,
    ReactiveFormsModule,
    MatError,
    MatButton,
    MatButton,
    MatButton,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = new FormControl('', [Validators.required]);
  errorMessage = '';

  constructor(private routing:Router,activatedRouter:ActivatedRoute,private userRequestService:UserRequestService) {
    merge(this.login.statusChanges, this.login.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.login.hasError('required'))
    {
      this.errorMessage = 'Необходимо ввести логин';
    }
    else
    {
      this.errorMessage = '';
    }
  }
  Next(){
    console.log(this.login.value)
    if (this.login.value != null && !this.login.invalid)
    {
      this.userRequestService.login = this.login.value
      this.routing.navigate(['password'])
    }


  }
}
