import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";
import {ELinkTheme, IAppLinkProps} from "shared/ui/AppLink/interfaces";


export const AppLink: FC<IAppLinkProps> = ({className, children, to, theme = ELinkTheme.PRIMARY, ...props}) => {
    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...props}>
            {children}
        </Link>
    );
};
