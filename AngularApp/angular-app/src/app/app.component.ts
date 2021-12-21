import { Component } from '@angular/core';
import {Film, FilmsService} from "./services/Films.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
   films: Film[] = [];

   constructor(private _filmService: FilmsService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
     this.films = this._filmService.getFilm();
  }

}
