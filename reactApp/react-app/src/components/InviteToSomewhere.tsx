import './components.css';
import {Link} from "react-router-dom";

interface inviteInfo {
    path: string,
    text: string
}

export default function inviteToSomewhere(props: inviteInfo) {

    if (props.path == "/registration") {
        return (
            <div className='input_font row_container'>
                <p>
                    {props.text} &nbsp;
                    <Link to = {props.path}>
                        Регистрация
                    </Link>
                </p>

            </div>
        )
    }
    return(
        <>
            <div className='input_font row_container'>
            <p>
                {props.text} &nbsp;
                <Link to = {props.path}>
                    Вход
                </Link>
            </p>

            </div>
        </>




    );
}