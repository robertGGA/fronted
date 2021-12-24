import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Film, FilmsService} from "../../services/Films.service";

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.sass']
})
export class AddfilmComponent implements OnInit {
  filmForm: FormGroup;
  film: Film;

  constructor(private _filmService: FilmsService) {
    this.filmForm = new FormGroup({
      "name": new FormControl(''),
      "year": new FormControl(''),
      "desc": new FormControl(''),
      "genres": new FormControl(''),
      "poster": new FormControl(''),
      "id": new FormControl(_filmService.getLenghtList())
    });
  }

  ngOnInit(): void {
  }

  saveFilm() {
    let film: Film = this.filmForm.value as Film;
    this._filmService.saveFilm(film);
    this.filmForm.reset();

  }


}
