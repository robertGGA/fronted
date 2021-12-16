import "./slider.sass"
import {useState} from "react";
import iconFilms from "../../assets/Icon_List.svg";
export const Slider = () => {
    const [isDisabled, setDisable] = useState(true);

    const switchMode = () => {
        setDisable(!isDisabled);
    }
    return(
        <div className="wrapper_of_slider_and_icon">
            <div className="slider_container">
                    <button onClick={switchMode} disabled={!isDisabled} className="slider-button">
                        Буду смотреть
                    </button>
                    <button onClick={switchMode} disabled={isDisabled} className="slider-button">
                        Просмотрено
                    </button>
            </div>

            <a className="icon_change_view">
                <img src={iconFilms}/>
            </a>
        </div>


    )
}