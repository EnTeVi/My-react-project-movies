import css from './Film.module.css';
import {baseURL2} from "../../config";


function Film ({film}) {
    const {original_title, backdrop_path} = film;
    return (
        <div className={css.containerFilm}>
            <div>
                `url({baseURL2}{backdrop_path})`</div>
            <div>original_title: {original_title}</div>
            {/*<div>backdrop_path: {backdrop_path}</div>*/}
        </div>
    )
}

export {
    Film
}