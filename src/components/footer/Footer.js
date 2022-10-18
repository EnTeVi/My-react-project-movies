import css from './Footer.module.css';
import telegram from '../../logo/telegram_logo_icon_229299.png';
import git from '../../logo/github_logo_icon_229278.png';



function Footer () {

    return (
        <div className={css.footer}>
            <div className={css.boxMedia}>
                <img src={telegram} alt=""/>
                <img src={git} alt=""/>
            </div>
            <div className={css.boxAutor}>
                <h3>2022 @byAutor</h3>
            </div>
        </div>
    )
}


export {
    Footer
}