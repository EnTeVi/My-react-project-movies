import css from './Films.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Film} from "../Film/Film";
import {filmActions} from "../../redux";


function Films () {
    const {films} = useSelector(state => state.films);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(filmActions.getAll());
    }, [])
    console.log(films);

    return (
        <div className={css.container}>
            {films?.results?.map(film => <Film key={film.id} film={film}/>)}
        </div>
    )
}

export {
    Films
}