import React, {useContext, useState} from 'react';
import './content/App.css';
import LoginPage from './pages/login/LoginPage'
import Layout from './components/Layout/LayoutLogin'
import RegistrationPage from "./pages/registration/RegistrationPage";
import {Routes, Route} from "react-router-dom";
import {Provider} from "mobx-react";
import AuthLayout from "./components/Layout/AuthLayout";
import {MainStore} from "./stores/MainStore";
import Collection from "./pages/collection/Collection";
import {StoreContext} from "./store.context";



function App()  {
    const {mainStore} = useContext(StoreContext);
    const authStore = mainStore.authStore;
      // return !(authStore.getUserToken() !== "") ? (
    return (authStore.isAuthenticated()) ? (
          <>
              <Provider {...MainStore}>
                  <Routes>
                      <Route path={"/"} element={<Layout />}>
                          <Route path={"/login"} element={<LoginPage />}/>
                          <Route path={"/registration"} element={<RegistrationPage />} />
                      </Route>
                  </Routes>
              </Provider>
          </>
      ) : (
          <>
              <Provider {...MainStore}>
                    <Routes>
                        <Route path={"/"} element={<AuthLayout/>}>
                            <Route path={"/collection"} element={<Collection/>}/>
                        </Route>
                    </Routes>
              </Provider>
          </>
      );
}

export default App;
