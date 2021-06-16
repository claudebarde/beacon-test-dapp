import { writable } from "svelte/store";
import type { TezosToolkit } from "@taquito/taquito";

interface State {
  confirmationObservableTest: undefined | { level: number }[];
}

const initialState: State = {
  confirmationObservableTest: undefined
};

const store = writable(initialState);

const state = {
  subscribe: store.subscribe,
  updateConfirmationObservableTest: (conf: any) =>
    store.update(store => ({
      ...store,
      confirmationObservableTest:
        store.confirmationObservableTest &&
        Array.isArray(store.confirmationObservableTest)
          ? [...store.confirmationObservableTest, conf]
          : [conf]
    }))
};

export default state;
