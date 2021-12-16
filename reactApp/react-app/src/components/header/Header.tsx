import "./header.sass";
import {HeaderButton} from "./HeaderButton";
import logo from "./../../assets/Watch_Later_Logo_Short.svg";
import search from "../../assets/search.svg";
import profileIcon from "../../assets/Ellipse 1.svg";
import {useContext} from "react";
import {StoreContext} from "../../store.context";

import {observer} from "mobx-react";

const Header = observer(() => {
    const {mainStore} = useContext(StoreContext);


    // const user = mainStore.userStore.getUserByToken(mainStore.authStore.getAccessToken());
    return(
        <header className="header_wrapper">
            <div className="header">
                <div className="container_header">
                    <HeaderButton />
                </div>

                <div className="container_header">
                    <img src={logo} className="header-logo"/>
                </div>

                <div className="container_header">
                    <div className="container_search_with_img">
                        <a href="" className="search_wrapper">
                            <img src={search} className="search"/>
                        </a>
                        <a href="">
                            Поиск
                        </a>
                    </div>

                    <img src={profileIcon}/>
                </div>
            </div>
        </header>
    )

});

export default Header;