import css from './Film.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";


function Film ({film}) {
    const {original_title, poster_path, overview} = film;

    return (
        <div className={css.containerFilm}>
            <div className={css.name}>{original_title}</div>
            <img className={css.img} src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt=""/>
            <div className={css.title}>{overview}</div>
        </div>
    )
}

export {
    Film
}