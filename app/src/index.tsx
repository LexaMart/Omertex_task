import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Form } from './components/Form/Form';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Form />
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
