import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import styles from './styles.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {ELinkTheme} from "shared/ui/AppLink/interfaces";

interface INavbarProps {
    className?: string
}
export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={ELinkTheme.SECONDARY} to="/">Main</AppLink>
                <AppLink theme={ELinkTheme.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
};
