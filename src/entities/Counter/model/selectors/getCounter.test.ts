import { DeepPartial } from '@reduxjs/toolkit';
import { IRootStore } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter';

describe('getCounter', () => {
    test('Возвращает counter', () => {
        const state: DeepPartial<IRootStore> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as IRootStore)).toEqual({ value: 10 });
    });
});
