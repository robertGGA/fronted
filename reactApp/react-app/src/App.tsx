import React, {useContext, useState} from 'react';
import './content/App.css';
import LoginPage from './pages/login/LoginPage'
import Layout from './components/Layout/LayoutLogin'
import RegistrationPage from "./pages/registration/RegistrationPage";
import {Routes, Route} from "react-router-dom";
import {observer, Provider} from "mobx-react";
import AuthLayout from "./components/Layout/AuthLayout";
import {MainStore} from "./stores/MainStore";
import Collection from "./pages/collection/Collection";
import {StoreContext} from "./store.context";
import {FilmPage} from "./pages/aboutFilm/FilmPage";

const App = observer(() => {
    const {mainStore} = useContext(StoreContext);
    const authStore = mainStore.authStore;
      // return !(authStore.getUserToken() !== "") ? (
    console.log(authStore.isAuthenticated(), authStore.getAccessToken());

    return (authStore.isAuthenticated()) ? (
        <>
            <Provider store={mainStore}>
                <Routes>
                    <Route path={"/"} element={<AuthLayout/>}>
                        <Route path={"/collection"} element={<Collection/>}/>
                        <Route path = "/film/:id" element={<FilmPage/>}/>
                    </Route>
                </Routes>
            </Provider>
        </>
      ) : (
        <>
            <Provider store={mainStore}>
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                        <Route path={"/login"} element={<LoginPage />}/>
                        <Route path={"/registration"} element={<RegistrationPage />} />
                    </Route>
                </Routes>
            </Provider>
        </>
      );
})

export default App;
