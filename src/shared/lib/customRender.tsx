import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import i18nForTests from '../config/i18n/i18nForTests';

interface IOptions {
    route?: string
}
export function customRender(component: ReactNode, options: IOptions = {}) {
    const { route = '/' } = options;
    return render(
        <I18nextProvider i18n={i18nForTests}>
            <MemoryRouter initialEntries={[route]}>
                <ThemeProvider>
                    {component}
                </ThemeProvider>
            </MemoryRouter>
        </I18nextProvider>,
    );
}
