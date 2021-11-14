import inputArea from './Input'
import InputArea from "./Input";
import React from "react";

export default function LoginForm() {
    return(
        <form>
            <InputArea  name={'Адрес электронной почты'} type={'email'}/>
            <InputArea  name={'Пароль'} type={'password'}/>
            <InputArea name={'Войти'} type={'submit'} />
        </form>
    );
}