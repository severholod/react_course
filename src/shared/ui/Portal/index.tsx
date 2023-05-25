import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    element?: HTMLElement
}

export const Portal: FC<IProps> = ({ children, element }) => {
    const rootElement = document.getElementById('theme');

    const root = element ?? rootElement;

    return createPortal(children, root);
};
