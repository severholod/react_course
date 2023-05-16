// @ts-ignore
import {classNames} from "shared/lib/classNames";
import {FC} from "react";
// @ts-ignore
import styles from './styles.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {ETheme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button";

interface IThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({className}) => {
    const {toggleTheme, theme} = useTheme()
    return (
        <Button
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === ETheme.LIGHT ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};
