import {useParams} from "react-router";
import "./Film.sass";
import {useContext} from "react";
import {StoreContext} from "../../store.context";
import plus from "../../assets/plus.svg";

export const FilmPage = () => {
    const {id} = useParams();

    const { mainStore } = useContext(StoreContext);
    const filmStore = mainStore.filmStore;

    const film = filmStore.getFilm(Number(id));

    const logoutHandler = () => {
        mainStore.authStore.logout();
        console.log(mainStore.authStore.isAuthenticated)
        window.location.href = "/login";
    }


    if (film != undefined) {
        return (
            <main className="film_container">
                <img src={film.poster} className="film_poster"/>

                <div className="film_info">
                    <h1 className="title_of_film">
                        {film.name}
                    </h1>

                    <div className="row_year_and_rate">

                        <p>
                            {film.year}
                        </p>
                        <div className="rate_container_film">
                            {film.rate}
                        </div>

                    </div>

                    <button className="gonna_watch_button">
                       <img src={plus} className="plus"/> Буду смотреть
                    </button>

                    <p className="description_film">
                        {film.desc}
                    </p>

                    <button onClick={logoutHandler}>
                        logout
                    </button>


                </div>


            </main>
        );
    } else return (
        <p>fdf</p>
    );
}
