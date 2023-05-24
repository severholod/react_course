import { createContext } from 'react';

export enum ETheme {
    LIGHT = 'light',
    DARK = 'dark'
}
type TSetTheme = (theme: ETheme) => ETheme

export interface IThemeContextProps {
    theme?: ETheme;
    setTheme?: (value: ETheme | TSetTheme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
