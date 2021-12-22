import { Component, OnInit } from '@angular/core';
import {Film, FilmsService} from "../../services/Films.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  films: Film[] = [];
  firstname: any;

  constructor(private _filmService: FilmsService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.films = this._filmService.getFilm();
  }

  search() {
    if(this.firstname == "") {
      this.ngOnInit();
    } else {
      this.films = this.films.filter(res => {
        return res.name.toLocaleLowerCase().match(this.firstname.toLowerCase());
      })
    }
  }

}
