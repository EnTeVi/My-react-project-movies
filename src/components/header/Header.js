import ReactSwitch from "react-switch";
import * as PropTypes from "prop-types";

import logo from '../../logo/film-icon_30381.png';
import logoUser from '../../logo/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg';
import css from './Header.module.css';
import {useTheme} from "../DarkTheme/Hooks";
import {Search} from '../Search/Search'


function Button(props) {
    return null;
}

Button.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.string
};

function Header () {

    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "ligth" : "dark"));
    }


    return (
        <div>
            <header className={css.header}>
                <div className={css.boxLogo}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <h2>Movie Films</h2>
                    </div>
                </div>
                <div className={css.boxSearch}>
                    {/*<input placeholder="Search" type="search"/>*/}
                    <Search/>
                </div>
                <div className={css.boxButton}>
                    <div className={css.switch}>
                        <div className={css.text}>
                            <h3>Ligth</h3>
                        </div>
                        <div>
                            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
                        </div>
                        <div className={css.text}>
                            <h3>Dark</h3>
                        </div>
                    </div>
                    <div className={css.user}>
                        <h3>Alan</h3>
                        <img src={logoUser} alt=""/>
                    </div>
                </div>
            </header>
        </div>
    );
}


export {
    Header
}