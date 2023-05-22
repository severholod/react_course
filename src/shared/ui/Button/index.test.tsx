import { render, screen } from '@testing-library/react';
import { Button, EThemeButton } from 'shared/ui/Button';

describe('<Button>', () => {
    test('Рендер в ДОМ', () => {
        const text = 'TEXT';
        render(<Button>{text}</Button>);
        expect(screen.queryByText(text)).toBeInTheDocument();
    });
    test('Рендер с темой Clear', () => {
        const text = 'TEXT';
        render(<Button theme={EThemeButton.CLEAR}>{text}</Button>);
        expect(screen.queryByText(text)).toHaveClass('clear');
    });
});
