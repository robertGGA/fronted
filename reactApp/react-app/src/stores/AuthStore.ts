import {action, makeAutoObservable, makeObservable, observable} from "mobx";

export class AuthStore {
    authenticated = false;


    constructor() {
        makeAutoObservable(this);
        this.authenticated = !!this.getAccessToken();
    }

     isAuthenticated(): boolean {
        return this.authenticated;
    }

     setAuthenticated(authenticated: boolean) {
        this.authenticated = authenticated;
    }

      login() {
        try {
            console.log("LOGIN");
            this.setAuthenticated(true);
            console.log(this.isAuthenticated);
        } catch (err) {
            console.log("ERROR");
            this.setAuthenticated(false);
            console.log(this.isAuthenticated);
        }
    }

    logout() {
        localStorage.removeItem("access_token");
        this.setAuthenticated(false);
    }

    getAccessToken() {
        return localStorage.getItem("access_token");
    }
}
