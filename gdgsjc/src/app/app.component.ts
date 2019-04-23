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
    this.mostrarTelaInteira();
  }

  mostrarTelaInteira(){
    setTimeout(() => {
    this.telaInteira = true;
    }, 1000);
  }

}
