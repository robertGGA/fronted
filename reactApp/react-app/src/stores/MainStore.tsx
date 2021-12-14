import {UserStore} from "./UserStore";
import {makeAutoObservable, observable} from "mobx";
import {AuthStore} from "./AuthStore";

export class MainStore {
    userStore: UserStore;
    authStore: AuthStore;

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore();
        this.authStore = new AuthStore();
    }
}
