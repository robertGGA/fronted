import UserModel from "../models/UserModel";
import {makeAutoObservable} from "mobx";
import {films} from "../constants/films-list";
import FilmModel from "../models/FilmModel";


export class FilmStore {
    filmList = films;

    constructor() {
        makeAutoObservable(this);
    }

    getFilm(id: number) {
        return films.find(film => film.id === id);
    }
}