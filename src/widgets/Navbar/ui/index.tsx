import { classNames } from 'shared/lib/classNames';
import { FC, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { EButtonTheme } from 'shared/ui/Button/interfaces';
import styles from './styles.module.scss';

interface INavbarProps {
    className?: string
}
export const Navbar: FC<INavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                theme={EButtonTheme.PRIMARY}
                className={styles.links}
                onClick={() => setIsOpen(true)}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Aliquid aperiam consequatur in
                laborum odit quas similique.
                Amet aut est eum in, magnam minima
                molestias neque nulla officia quos recusandae
                voluptates voluptatibus. Amet debitis dolor, dolore
                earum, enim facere fugiat illum in iste,
                iure nesciunt nostrum numquam provident
                suscipit voluptas voluptate?
            </Modal>
        </div>
    );
};
