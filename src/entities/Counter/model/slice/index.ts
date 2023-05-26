import { createSlice } from '@reduxjs/toolkit';
import { ICounterStore } from 'entities/Counter';

const initialState: ICounterStore = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
