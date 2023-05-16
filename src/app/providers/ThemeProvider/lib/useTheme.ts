import {LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: ETheme
}

export function useTheme(): IUseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme((prevState) => {
            const newTheme = prevState === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
            return newTheme
        })
    }

    return {theme, toggleTheme}
}