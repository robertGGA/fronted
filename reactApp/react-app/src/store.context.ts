import {MainStore} from "./stores/MainStore";
import React from "react";


interface IStoreContext {
    mainStore: MainStore;
}

const mainStore = new MainStore();

export const StoreContext = React.createContext<IStoreContext>({
    mainStore
});