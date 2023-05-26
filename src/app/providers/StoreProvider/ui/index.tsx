import { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore, IRootStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface IProps {
    initialState?: DeepPartial<IRootStore>
}
export const StoreProvider: FC<IProps> = ({ children, initialState }) => {
    const store = createStore(initialState as IRootStore);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
