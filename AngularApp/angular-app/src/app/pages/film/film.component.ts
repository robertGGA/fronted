import {Component, Input, OnInit} from '@angular/core';
import {Film, FilmsService} from "../../services/Films.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent implements OnInit {
  film: Film;
  private id: number = 0;

  constructor(private route: ActivatedRoute, private _filmService: FilmsService) {
  }

  getFilm() {
    console.log(this.id);
    this.film = this._filmService.getFilmById(this.id);
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params["id"]);
    console.log(this.id);
    this.getFilm();
  }

}
