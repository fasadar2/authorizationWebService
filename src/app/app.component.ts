import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatButton, MatCardHeader, MatCardActions, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardTitleGroup, MatCardImage, FlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authorization';
  ngOnInit(): void {
    this.GoToLogin();
  }
  constructor(private router: Router) { }
  GoToLogin() {
    this.router.navigate(['/login']);
  }
}

