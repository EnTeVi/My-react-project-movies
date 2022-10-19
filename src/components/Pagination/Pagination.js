import React from "react";

import css from './Pagination.module.css';


function Pagination ({filmsPerPage, totalFilms}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li className={css.pageItem} key={number}>
                        <a href="#" className={css.pageLink}>
                            {number}
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export {
    Pagination
}