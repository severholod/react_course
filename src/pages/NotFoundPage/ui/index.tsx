import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface INotFoundPageProps {
    className?: string
}
export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Не найдено')}
        </div>
    );
};
