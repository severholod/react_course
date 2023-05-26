import { createSelector } from '@reduxjs/toolkit';
import { ICounterStore, getCounter } from 'entities/Counter';

export const getCounterValue = createSelector(getCounter, (state: ICounterStore) => state.value);
