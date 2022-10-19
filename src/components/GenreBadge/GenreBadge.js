import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {filmActions} from "../../redux";


function GenreBadge () {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(filmActions.getAllGenres());
    }, [])


    return (
        <div>
            {genres?.map(ganre => <div>{ganre.id}</div>)}

        </div>
    )

}

export {
    GenreBadge
}