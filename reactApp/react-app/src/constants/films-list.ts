import FilmModel from "../models/FilmModel";
import pic from "../filmsPic/firstImage.png"

export const films: FilmModel[] = [
    {
        name: "Минари",
        year: 2010,
        desc: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана. ",
        genre: [
            "Ааа", "123"
        ],
        poster: pic,
        rate: 7.5,
        id: 1
    }
]
