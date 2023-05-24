import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ELinkTheme, IAppLinkProps } from 'shared/ui/AppLink/interfaces';
import styles from './styles.module.scss';

export const AppLink: FC<IAppLinkProps> = ({
    className, children, to, theme = ELinkTheme.PRIMARY, ...props
}) => (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...props}>
        {children}
    </Link>
);
