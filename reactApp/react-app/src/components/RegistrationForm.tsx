import './components.css'
import React, {useEffect, useState} from "react";
import UserStore from "../stores/UserStore";
import UserModel from '../models/UserModel';


export default function RegForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPasswords, setErrorPasswords] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isValidButton, setValidButton] = useState(true);

    const emailHandler = (e: any) => {
        setEmail(e.target.value);
        if (!( /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email.toLowerCase())))
        {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }

    const repeatPasswordHandler = (e: any) => {
        setRepeatPassword(e.target.value);
    }

    useEffect(() => {
        if (password == repeatPassword) {
            setErrorPasswords(false);
        } else {
            setErrorPasswords(true);
        }
    })

    useEffect(() => {
        if (email === "" || password === "" || repeatPassword === "") {
            setValidButton(true);
        } else {
            setValidButton(false);
        }
    });

    const submitRegForm = (e: any) => {
        e.preventDefault();
        if( (password == repeatPassword)) {
            console.log(password == repeatPassword);
            if((UserStore.getUserByEmail(email) === undefined)) {
                setErrorMessage("")
                setErrorPasswords(false);
                setErrorEmail(false);
            } else {
                setErrorMessage("Данный email уже занят")
            }
        } else {
            setErrorMessage("Пароли не совпадают")
        }
    }

    return (
        <form>
            <input onChange={emailHandler} placeholder={"Адрес электронной почты"} type={"email"} className='input_area input_font' required/>
            <input onChange={passwordHandler} placeholder={"Пароль"} type={"password"} className='input_area input_font' required/>
            <input onChange={repeatPasswordHandler} placeholder={"Повторите пароль"} type={"password"} className='input_area input_font' required/>
            {(errorPasswords || errorEmail) && <p className="error_message">{errorMessage}</p>}
            <input onClick={(e) => submitRegForm(e)} placeholder={"Регистрация"} disabled={isValidButton} type={"submit"} className='button_submit input_font' required/>
        </form>
    )
}