import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface ILoaderProps {
    className?: string,
    page: boolean
}
export const Loader: FC<ILoaderProps> = ({ className, page = false }) => (
    <div className={
        classNames(styles.Loader, { [styles.page]: page }, [className])
    }
    >
        <div className={styles.ldsEllipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
