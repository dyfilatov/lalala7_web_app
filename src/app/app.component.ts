import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OnboardingComponent} from "./onboarding/onboarding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnboardingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lalala7';
}
