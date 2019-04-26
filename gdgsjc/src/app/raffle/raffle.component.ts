import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-raffle",
  templateUrl: "./raffle.component.html",
  styleUrls: ["./raffle.component.css"]
})
export class RaffleComponent implements OnInit {
  fileira: number;
  cadeira: number;
  rdmCadeira: number;
  rdmFileira: number;
  sorteiro: boolean;

  constructor() {}

  ngOnInit() {}

  gerarMapaSortear(): void {
    this.rdmCadeira = 1 +  Math.floor(Math.random() * (this.cadeira));
    this.rdmFileira = 1 +  Math.floor(Math.random() * (this.fileira));
    this.sorteiro = true;
  }
}
