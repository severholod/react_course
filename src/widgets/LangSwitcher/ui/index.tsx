import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { EButtonTheme } from 'shared/ui/Button/interfaces';

interface ILangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonTheme.CLEAR}
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t('Язык')}
        </Button>
    );
};
