import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
//import {TelegramWebappService} from "@zakarliuka/ng-telegram-webapp";
import WebApp  from "@twa-dev/sdk";

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent implements OnInit {

/*  constructor(private telegramService: TelegramWebappService) {

  }*/
  ngOnInit(): void {
    try {

      WebApp.showAlert("Hey " + WebApp.initDataUnsafe.user?.username +" there!");
      /*      this.telegramService.showPopup({
              title: "Hello!",
              message: "Welcome!",
              buttons: [{type: "ok"}]
            })*/
    } catch (e){}
  }
  step: number = 1;
  headerText: string = "Welcome to TONCHI";
  subText: string = "";
  buttonText: string = "Next";

  nextStep() {
    this.step++;
    switch (this.step){
      case 2:
        this.headerText = "Play To Learn";
        this.subText = "Collect Tonchies find some tasks";
        break;
      case 3:
        this.headerText = "Use virtual wallet to interact with game";
        this.buttonText = "Let’s start!";
        break;
    }
  }
}
