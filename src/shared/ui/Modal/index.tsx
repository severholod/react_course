import { classNames } from 'shared/lib/classNames';
import React, { FC, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal';
import styles from './styles.module.scss';
import { IModalProps } from './interfaces';

export const Modal: FC<IModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const closeHandler = () => {
        onClose?.();
    };

    const onContentClick = (event: React.MouseEvent) => event.stopPropagation();

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, { [styles.opened]: isOpen }, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
