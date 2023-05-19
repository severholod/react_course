import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface IPagesErrorProps {
    className?: string
}
export const PagesError: FC<IPagesErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const reload = () => {
        navigate(0);
    };

    return (
        <div className={classNames(styles.PagesError, {}, [className])}>
            <p>{t('Ошибка')}</p>
            <Button onClick={reload}>
                {t('Обновить')}
            </Button>
        </div>
    );
};
