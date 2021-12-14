import "./header.sass";
import buttonIcon from "../../assets/collection_icon.svg";
import plus from "../../assets/plus.svg";
export const HeaderButton = () => {
    return (
        <>
            <button className="collection_button">
                <img src={buttonIcon} className="icon_collection_button"/>
                <p className="header_buttons_font">Коллекция</p>
            </button>

            <div className="second_block_of_header_buttons">
                <a href="">
                    <img src={plus} className="plus_icon"/>
                </a>
                <a className="">
                    Добавить
                </a>

                <img src="" />

            </div>
        </>
    );
}