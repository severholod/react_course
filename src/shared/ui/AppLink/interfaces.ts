import { LinkProps } from 'react-router-dom';

export enum ELinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface IAppLinkProps extends LinkProps{
    className?: string
    theme?: ELinkTheme
}
