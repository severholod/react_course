import { counterReducer, counterActions, ICounterStore } from 'entities/Counter';
import { DeepPartial } from '@reduxjs/toolkit';

describe('counterSlice', () => {
    test('with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
    test('decrement', () => {
        const state: DeepPartial<ICounterStore> = {
            value: 10,
        };
        expect(
            counterReducer(state as ICounterStore, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: DeepPartial<ICounterStore> = {
            value: 10,
        };
        expect(
            counterReducer(state as ICounterStore, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
});
