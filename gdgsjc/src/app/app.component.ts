import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  telaInteira: boolean;
  logos: string[];
  moveFacebook: boolean;
  moveInstagram: boolean;
  moveLinkedin: boolean;
  moveMeetup: boolean;
  moveEmail: boolean;

  constructor() {
    this.logos = ['facebook', 'meetup', 'instagram', 'linkedin', 'email'];

  }

  ngOnInit(): void {
    this.MostrarTelaInteira();
    this.MoveIcon();
  }

  MostrarTelaInteira() {
    setTimeout(() => {
      this.telaInteira = true;
    }, 1000);
  }

  MoveIcon(): void {
    setTimeout(() => {
      this.moveFacebook = !this.moveFacebook;
    }, 2000);

    setTimeout(() => {
      this.moveFacebook = !this.moveFacebook;
      this.moveInstagram = !this.moveInstagram;
    }, 3000);


    setTimeout(() => {
      this.moveFacebook = this.moveFacebook;
      this.moveInstagram = !this.moveInstagram;
      this.moveLinkedin = !this.moveLinkedin;
    }, 4000);

    setTimeout(() => {
      this.moveFacebook = this.moveFacebook;
      this.moveInstagram = this.moveInstagram;
      this.moveLinkedin = !this.moveLinkedin;
      this.moveMeetup = !this.moveMeetup;
    }, 5000);

    setTimeout(() => {
      this.moveFacebook = this.moveFacebook;
      this.moveInstagram = this.moveInstagram;
      this.moveLinkedin = this.moveLinkedin;
      this.moveMeetup = !this.moveMeetup;
      this.moveEmail = !this.moveEmail;
    }, 6000);

    setTimeout(() => {
      this.moveEmail = !this.moveEmail;
    }, 7000);


  }

  RedirectUrl(url: string): void {
    window.open(url);
  }

  SendEmail(email: string): void {
    window.location.href = email;
  }

}
