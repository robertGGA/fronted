import React from 'react';
import logo from './Watch_Later_Logo_Full.svg';
import {Outlet} from "react-router-dom";
import './authLayoutStyles.sass';
import Header from './../header/Header';

const LayoutLogin = () => {
    return(
        <Header/>
    );
}

export default LayoutLogin;