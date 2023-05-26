import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { IRootStore } from './interfaces';

export function createStore(initialState?: IRootStore) {
    return configureStore<IRootStore>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
