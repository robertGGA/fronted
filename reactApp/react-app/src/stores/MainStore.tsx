import {UserStore} from "./UserStore";
import {makeAutoObservable, observable} from "mobx";
import {AuthStore} from "./AuthStore";
import {FilmStore} from "./FilmStore";

export class MainStore {
    userStore: UserStore;
    authStore: AuthStore;
    filmStore: FilmStore;

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore();
        this.authStore = new AuthStore();
        this.filmStore = new FilmStore();
    }
}
