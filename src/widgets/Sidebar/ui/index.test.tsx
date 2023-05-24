import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { customRender } from 'shared/lib/customRender';

describe('<Sidebar>', () => {
    test('Рендер в ДОМ', () => {
        customRender(<Sidebar />, { route: '/' });
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        customRender(<Sidebar />, { route: '/' });
        const button = screen.queryByTestId('sidebar-toggle');
        const sidebar = screen.queryByTestId('sidebar');
        fireEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
    });
});
