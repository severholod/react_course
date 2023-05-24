import { classNames } from 'shared/lib/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { EButtonTheme } from 'shared/ui/Button/interfaces';
import { AppLink } from 'shared/ui/AppLink';
import { ELinkTheme } from 'shared/ui/AppLink/interfaces';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import styles from './styles.module.scss';

interface ISidebarProps {
    className?: string
}
export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();
    return (
        <div
            className={classNames(styles.Sidebar, {
                [styles.collapsed]: collapsed,
            }, [className])}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={EButtonTheme.BACKGROUD_INVERT}
                className={styles.toggler}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    theme={ELinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={ELinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
