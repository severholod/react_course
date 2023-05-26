import { IRootStore } from 'app/providers/StoreProvider';

export const getCounter = (state: IRootStore) => state.counter;
