import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): IUseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme((prevState) => {
            const newTheme = prevState === Theme.DARK ? Theme.LIGHT : Theme.DARK
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
            return newTheme
        })
    }

    return {theme, toggleTheme}
}