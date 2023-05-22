import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation';

describe('<Sidebar>', () => {
    test('Рендер в ДОМ', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.queryByTestId('sidebar-toggle');
        const sidebar = screen.queryByTestId('sidebar');
        fireEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
    });
});
