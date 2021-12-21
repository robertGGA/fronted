import { Injectable } from '@angular/core';
import {FilmMock} from "../mocks/FilmsMock";

export interface Film {
  poster?: string
  name: string,
  year: number,
  desc: string,
  genres: string[],
  id: number
}


@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films: Film[] = FilmMock;

  constructor() {}

  getFilm() {
    return this.films;
  }




}
