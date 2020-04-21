import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { RedeSocial } from './raffle/shared/rede-social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public fullScreen: boolean;
  public mostrarSortear: boolean;
  public redesSociais: RedeSocial[];

  constructor() {

    this.redesSociais = [
      {
        link: "https://www.facebook.com/gdgsjc",
        srcImagem: "facebook.png",
        label: "Facebook"
      },
      {
        link: "https://www.instagram.com/gdg_sjc",
        srcImagem: "instagram.png",
        label: "instagram"
      },
      {
        link: "https://br.linkedin.com/company/gdg-sao-jose-dos-campos",
        srcImagem: "linkedin.png",
        label: "linkedin"
      },
      {
        link: "https://www.meetup.com/gdgsjc/",
        srcImagem: "meetup.png",
        label: "meetup"
      },
      {
        link: "https://chat.whatsapp.com/6xMDL2E0HpH6WiaFTZWZor",
        srcImagem: "whatsapp.png",
        label: "whatsapp"
      },
      {
        link: "https://twitter.com/GDG_SJC",
        srcImagem: "twitter.png",
        label: "twitter"
      },
      {
        link: "https://t.me/joinchat/EFuNJxMTxlOFgQf_pa7OAg",
        srcImagem: "telegram.svg",
        label: "telegram"
      },
      {
        link: "https://www.youtube.com/gdgsjc",
        srcImagem: "youtube.png",
        label: "youtube"
      },
      {
        email: "mailto:gdgsaojosedoscampos@gmail.com",
        srcImagem: "gmail.png",
        label: "gmail"
      }
    ];
  }

  ngOnInit(): void {
    this.MostrarTelaInteira();
    this.MoveIcon();
  }

  MostrarTelaInteira() {
    setTimeout(() => {
      this.fullScreen = true;
    }, 1500);
  }

  MoveIcon(): void {
    var moveIcon = setInterval(() => {
      let rede = this.redesSociais.find(redes => !redes.move);
      if (!rede) {
        this.redesSociais.map(redes => redes.move = false);
        clearInterval(moveIcon);
        return;
      }
      rede.move = true;
    }, 1000);
  }

  RedirectUrl(rede?: RedeSocial): void {
    if (rede.link)
      window.open(rede.link);
    else
      window.location.href = rede.email;
  }

}
