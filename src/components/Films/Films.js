import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {filmActions} from "../../redux";
import css from './Films.module.css';
import {Film} from "../Film/Film";
import {Pagination} from "../Pagination/Pagination";
import {Ganres} from "../Ganres/Ganres";


function Films () {
    const {films} = useSelector(state => state.films);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(filmActions.getAll());
    }, [])
    console.log(films);


    return (
        <div className={css.container}>
            {films?.map(film => <Film key={film.id} film={film} />)}
            <div id="stars"></div>
        </div>
    )
}

export {
    Films
}