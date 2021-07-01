import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useFormEhernetReducer } from './useFormReducer';

export const rootReducer = combineReducers({
  form: useFormEhernetReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
// export type RootState = ReturnType<typeof rootReducer>;
