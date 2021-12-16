import {useContext, useEffect, useState} from "react";
import FilmModel from "../../models/FilmModel";

import "../../pages/collection/collectionPage.sass";
import {films} from "../../constants/films-list";
import pic from "../../filmsPic/firstImage.png"
import {Link} from "react-router-dom";
import {StoreContext} from "../../store.context";

export const FilmList = () => {
    const [collection, setCollection] = useState<FilmModel[]>()

    useEffect(() => {
        setCollection(films);
    }, []);



    if (collection) return(
        <div className="films-list">
            {collection?.map(film => {
                console.log(film.poster === "../../filmsPic/firstImage.png");
                return(
                    <Link to={`/film/${film.id}`}>
                        <div key={film.id} className="film">
                            <div className="film-poster" style={{backgroundImage: `url(${film.poster})`} }>
                                <div>
                                    <div className="rate_container">
                                        {film.rate}
                                    </div>
                                </div>
                            </div>
                            <p className="film_name">{film.name}</p>
                        </div>
                    </Link>
                );
            })}



        </div>
    ); else return (<p>Error</p>)
}