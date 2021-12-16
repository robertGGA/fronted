
import './components.css'
import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import UserStore from "../stores/UserStore";
import {StoreContext} from "../store.context";
import {Link} from "react-router-dom";


const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [error, setError] = useState("");
    const [bothError, setBothError] = useState(false);
    const [isValidButton, setValidButton] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    const { mainStore } = useContext(StoreContext);
    const userStore = mainStore.userStore;
    const authStore = mainStore.authStore;

    const emailHandler = async (e: any) => {

        setEmail(e.target.value)
        console.log(email);

        if (email != null) {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase()))) {
                setErrorEmail(true);
            } else {
                setErrorEmail(false);
            }
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }

    const submitHandler = ((e: any) => {
        e.preventDefault();
        let user = userStore.getUser(email, password);
        console.log(user);

        if (user === undefined) {
            setError("Неправильные пароль или логин");
            console.log(email);
            setBothError(true);
        } else {
            setIsPressed(true);
            setBothError(false);
            setTimeout(() => {
                localStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4In0.yXkZ6lm4BRunBpiA_XTMRfp_Ddq0wRpyAIYeBnomFrs");

                mainStore.authStore.setAuthenticated(true);

                setIsPressed(false);
                window.location.href = "/collection";
                // window.open("/collection");
            }, 3000);

            //redirect
        }
        });


    useEffect(() => {
        if (errorEmail && password !== "") {
            setValidButton(true);
        } else {
            setValidButton(false);
        }
    }, [errorEmail, password]);

    return(
        <form>
            <input onChange={emailHandler} name={"email"} placeholder={"Адрес электронной почты"} type={"search"} className='input_area input_font' required/>
            <input onChange={passwordHandler} name={"password"} placeholder={"Пароль"} type={"Password"} className='input_area input_font' required/>
            {(bothError || errorEmail) && <p className="error_message">{error}</p>}
            <Link to={"/collection"}>
                {(!isPressed) && <input onClick={(e) => submitHandler(e)} disabled={!isValidButton} name={"submit"} placeholder={"Войти"} type={"submit"} className='button_submit input_font' id='loginSubmit' required/>}
            </Link>
        </form>
    );
};

const Login = observer(LoginForm)

export {Login};