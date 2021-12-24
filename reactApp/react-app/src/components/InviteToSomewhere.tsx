import './components.css';
import {Link} from "react-router-dom";
import CSS from 'csstype';

interface inviteInfo {
    path: string,
    text: string
}

export default function inviteToSomewhere(props: inviteInfo) {
    const color: CSS.Properties = {
        color: "#002DFF"
    }

    if (props.path == "/registration") {
        return (
            <div className='input_font row_container'>
                <p>
                    {props.text} &nbsp;
                    <Link to = {props.path} style={color}>
                        Регистрация
                    </Link>
                </p>
            </div>
        )
    }
    return(
        <>
            <div className='input_font row_container'>
            <p id='#invite'>
                {props.text} &nbsp;
                <Link to = {props.path}  style={color}>
                    Вход
                </Link>
            </p>

            </div>
        </>




    );
}