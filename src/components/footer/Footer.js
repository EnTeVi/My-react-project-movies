import css from './Footer.module.css';
import telegram from '../../logo/telegram_logo_icon_229299.png';
import git from '../../logo/github_logo_icon_229278.png';


function Footer () {

    return (
        <div className={css.footer}>
            <div className={css.boxMedia}>
                <a href="https://t.me/EnTeVi"><img src={telegram} alt=""/></a>
                <a href="https://github.com/EnTeVi"><img src={git} alt=""/></a>
            </div>

            <div className={css.boxAutor}>
                <h3>2022 @by EnTeVi</h3>
            </div>
        </div>
    )
}


export {
    Footer
}