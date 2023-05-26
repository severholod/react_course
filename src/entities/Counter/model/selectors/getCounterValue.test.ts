import { DeepPartial } from '@reduxjs/toolkit';
import { IRootStore } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter';

describe('getCounterValue', () => {
    test('Возвращает value', () => {
        const state: DeepPartial<IRootStore> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as IRootStore)).toEqual(10);
    });
});
