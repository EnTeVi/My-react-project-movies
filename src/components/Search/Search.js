import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {filmActions} from "../../redux";



function Search () {
    const {search} = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmActions.getSearchFilms())
    }, [])

    return (
        <div>
            {search.map(searchF => <input placeholder='Search' type='text' key={searchF.id} onChange={(searchF) => {
                dispatch(filmActions.setSelectedSearch(searchF.name));
                dispatch(filmActions.getSearchFilms());
            }}/>)}
        </div>
    )
}

export {
    Search
}