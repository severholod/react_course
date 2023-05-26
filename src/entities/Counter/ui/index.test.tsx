import { customRender } from 'shared/lib/customRender';
import { Counter } from 'entities/Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter', () => {
    const initialState = { counter: { value: 10 } };
    test('to Be In The Document', () => {
        customRender(<Counter />, { initialState });
        const element = screen.queryByTestId('counter');
        expect(element).toHaveTextContent('10');
    });

    test('increment', () => {
        customRender(<Counter />, { initialState });
        const btn = screen.getByTestId('increment');
        fireEvent.click(btn);
        const element = screen.queryByTestId('counter');
        expect(element).toHaveTextContent('11');
    });

    test('decrement', () => {
        customRender(<Counter />, { initialState });
        const btn = screen.getByTestId('decrement');
        fireEvent.click(btn);
        const element = screen.queryByTestId('counter');
        expect(element).toHaveTextContent('9');
    });
});
