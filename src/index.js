import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import {createAPI} from './api';
import {BrowserRouter} from 'react-router-dom';

import combineReducers from './reducer/index.js';
import {Operation} from './reducer/films/films';

import {App} from './components/app/app.jsx';

const init = () => {
  const pushLoginStateToHistory = () => history.pushState(null, null, `/login`);
  const api = createAPI(pushLoginStateToHistory);

const composeEnhancers =
  typeof window === `object`
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api))
  );

  const appStore = createStore(combineReducers, enhancer);
  appStore.dispatch(Operation.loadFilms());

  ReactDOM.render(
    (<Provider store={appStore}>
      <BrowserRouter>
        <App/>
       </BrowserRouter>
    </Provider>),
    document.getElementById(`root`)
  );
};

init();
