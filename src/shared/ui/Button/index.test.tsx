import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { EButtonTheme } from 'shared/ui/Button/interfaces';

describe('<Button>', () => {
    test('Рендер в ДОМ', () => {
        const text = 'TEXT';
        render(<Button>{text}</Button>);
        expect(screen.queryByText(text)).toBeInTheDocument();
    });
    test('Рендер с темой Clear', () => {
        const text = 'TEXT';
        render(<Button theme={EButtonTheme.CLEAR}>{text}</Button>);
        expect(screen.queryByText(text)).toHaveClass('clear');
    });
});
