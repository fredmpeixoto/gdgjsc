import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'gdgsjc';
  telaInteira: boolean;

  ngOnInit(): void {
    this.MostrarTelaInteira();
  }

  MostrarTelaInteira(){
    setTimeout(() => {
    this.telaInteira = true;
    }, 1000);
  }

  RedirectUrl(url:string): void{
    window.open(url);
  }

  SendEmail(email:string): void{
    window.location.href = email;
  }

}
