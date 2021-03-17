import { createContext, useContext } from 'react';

const Store = createContext({});

export function StoreProvider(props) {
  return <Store.Provider value={props.value}>{props.children}</Store.Provider>;
}

export function useStore() {
  const store = useContext(Store);
  return store;
}
