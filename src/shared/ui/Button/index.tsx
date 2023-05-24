import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';
import { EButtonTheme, TButtonSize } from './interfaces';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme
    square?: boolean,
    size?: TButtonSize
}
export const Button: FC<IButtonProps> = ({
    theme = EButtonTheme.CLEAR,
    className,
    children,
    square,
    size = '40',
    ...props
}) => (
    <button
        type="button"
        className={
            classNames(
                styles.Button,
                { [styles.square]: square },
                [className, styles[theme], styles[`size_${size}`]],
            )
        }
        {...props}
    >
        {children}
    </button>
);
