import {createContext, FC, useMemo, useState} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

type TSetTheme = (theme: Theme) => Theme

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (value: Theme | TSetTheme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)


    const defaultProps = useMemo(() => ({theme , setTheme}), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
    )
}