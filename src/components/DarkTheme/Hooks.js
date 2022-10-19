import {useLayoutEffect, useState} from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'ligth');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('appTheme', theme)
    }, [theme])

    return {theme, setTheme}

}

export {
    useTheme
}

