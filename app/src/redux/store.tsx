import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useFormEhernetReducer } from './useFormEthernetReducer';
import { useFormWifiReducer } from './useFormWifiReducer';

export const rootReducer = combineReducers({
  formEthernet: useFormEhernetReducer,
  formWifi: useFormWifiReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
