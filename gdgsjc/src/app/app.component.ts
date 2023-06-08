import { Component, OnInit } from '@angular/core';
import { socialMedia } from './socialMedia';

export interface socialMedia {
  link?: string;
  label?: string;
  email?: string;
  move?: boolean;
  srcImg?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public fullScreen!: boolean;
  public socialMedia: socialMedia[];

  constructor() {

    this.socialMedia = socialMedia;
  }

  ngOnInit(): void {
    this.fullScreenMode();
    this.MoveIcon();
  }

  fullScreenMode() {
    setTimeout(() => {
      this.fullScreen = true;
    }, 1500);
  }

  MoveIcon(): void {
    var moveIcon = setInterval(() => {
      let move = this.socialMedia.find(redes => !redes.move);
      if (!move) {
        this.socialMedia.map(redes => redes.move = false);
        clearInterval(moveIcon);
        return;
      }
      move.move = true;
    }, 1000);
  }

  RedirectUrl(media?: socialMedia): void {
    if (media?.link)
      window.open(media.link);
    else
      window.location.href = media!.email!;
  }

}
