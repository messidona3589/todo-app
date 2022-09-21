import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './modules/index';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
