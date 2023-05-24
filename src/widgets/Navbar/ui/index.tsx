import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { ELinkTheme } from 'shared/ui/AppLink/interfaces';
import styles from './styles.module.scss';

interface INavbarProps {
    className?: string
}
export const Navbar: FC<INavbarProps> = ({ className }) => (
    <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink theme={ELinkTheme.SECONDARY} to="/">Main</AppLink>
            <AppLink theme={ELinkTheme.SECONDARY} to="/about">About</AppLink>
        </div>
    </div>
);
