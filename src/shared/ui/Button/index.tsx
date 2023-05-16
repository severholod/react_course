import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';

export enum EThemeButton {
    CLEAR = 'clear'
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EThemeButton
}
export const Button: FC<IButtonProps> = ({
    theme = EThemeButton.CLEAR, className, children, ...props
}) => (
    <button
        type="button"
        className={classNames(styles.Button, {}, [className, styles[theme]])}
        {...props}
    >
        {children}
    </button>
);
