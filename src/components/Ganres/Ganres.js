import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {filmActions} from "../../redux";
import css from './Ganres.module.css';



function Ganres () {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(filmActions.getAllGenres());
    }, [])


    return (
        <div>
            {genres?.map(genre => <button className={css.button} onClick={() => {
                    dispatch(filmActions.setSelectedGenre(genre.id));
                    dispatch(filmActions.getFilteredFilms());
                }
            }>{genre.name}</button>)}
        </div>
    )

}

export {
    Ganres
}