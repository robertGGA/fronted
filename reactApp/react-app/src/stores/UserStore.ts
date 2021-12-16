import {makeAutoObservable} from "mobx";
import UserModel from "../models/UserModel";

export class UserStore {
    users: Array<UserModel> = [
        {
            email: "123@gmail.com",
            password: "12345678",
            imgPath: "/../../../",
            id: 1
        }
    ];
    constructor() {
        makeAutoObservable(this);
    }

    addUser(user: UserModel) {
        this.users.push(user);
    }

    getUserByToken(token: string | null) {
        if (token) {
            return this.getUserById(1);
        }
    }

    getUser(email: string, password: string) {
        return this.users.find((user => user.email === email && user.password === password));
    }

    getUserById(id: number) {
        return this.users.find((user => user.id === id));
    }

    getUserByEmail(email: string) {
        return this.users.find((user => user.email === email));
    }

    setCurrentToken() {
        
    }

    // isUserExist(email: string) {
    //     return this.users.find((user => user.email === email));
    // }
}

export default new UserStore();