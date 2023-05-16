import {classNames} from "shared/lib/classNames";
import {FC, useState} from "react";
import styles from './styles.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface ISidebarProps {
    className?: string
}
export const Sidebar: FC<ISidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div className={classNames(styles.Sidebar, {
            [styles.collapsed]: collapsed
        }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    );
};
