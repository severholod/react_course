import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface INavbarProps {
    className?: string
}
export const Navbar: FC<INavbarProps> = ({ className }) => (
    <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links} />
    </div>
);
