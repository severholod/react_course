import { classNames } from 'shared/lib/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, EThemeButton } from 'shared/ui/Button';
import styles from './styles.module.scss';

interface ISidebarProps {
    className?: string
}
export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(styles.Sidebar, {
            [styles.collapsed]: collapsed,
        }, [className])}
        >
            <Button
                onClick={onToggle}
                theme={EThemeButton.PRIMARY}
                className={styles.toggler}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
