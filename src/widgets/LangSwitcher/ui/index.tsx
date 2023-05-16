import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, EThemeButton } from 'shared/ui/Button';
import styles from './styles.module.scss';

interface ILangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={EThemeButton.CLEAR}
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t('Язык')}
        </Button>
    );
};
