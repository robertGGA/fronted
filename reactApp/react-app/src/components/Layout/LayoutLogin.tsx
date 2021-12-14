import React from 'react';
import logo from './Watch_Later_Logo_Full.svg';
import {Outlet} from "react-router-dom";
import './LayoutStyles.sass';

const LayoutLogin = () => {
    return(
        <div className="App_wrapper">
            <div className="App">
                <div className={"App_container"}>
                    <img src={logo} alt="logo" className="app-logo" />
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutLogin;