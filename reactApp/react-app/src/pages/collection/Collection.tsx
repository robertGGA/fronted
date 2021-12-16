import "./collectionPage.sass";

import {Slider} from "../../components/collectionPageComplonents/Slider"
import picture from "../../filmsPic/firstImage.png";
import {useState} from "react";
import FilmModel from "../../models/FilmModel";
import {films} from "../../constants/films-list";
import {Link} from "react-router-dom";
import {FilmList} from "../../components/collectionPageComplonents/FilmList";
import iconFilms from "../../assets/Icon_List.svg";

const Collection = () => {
   return(
       <main className="main_container">
          <h1 className="title">
              Коллекция
          </h1>
           <Slider/>

            <FilmList/>
       </main>
   )

}

export default Collection;