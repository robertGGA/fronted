import {makeAutoObservable} from "mobx";

export class AuthStore {
    private authenticated = false;
    constructor() {
       makeAutoObservable(this);
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    private setAuthenticated(authenticated: boolean) {
        this.authenticated = authenticated;
    }

    async login() {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4In0.yXkZ6lm4BRunBpiA_XTMRfp_Ddq0wRpyAIYeBnomFrs";
            localStorage.setItem("access_token", token);
            this.setAuthenticated(true);
        } catch (err) {
            this.setAuthenticated(false);
        }
    }
}
