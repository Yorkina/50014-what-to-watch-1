import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import {createAPI} from './api';

import combineReducers from './reducer/index.js';
import {Operation} from './reducer/films/films';

import App from './components/app/app.jsx';

const init = () => {
  const api = createAPI((...args) => appStore.dispatch(...args));

  const appStore = createStore(
      combineReducers,
      compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] && window[`__REDUX_DEVTOOLS_EXTENSION__`]()
    )
  );

  appStore.dispatch(Operation.loadFilms());

  ReactDOM.render(
    (<Provider store={appStore}>
      <App/>
    </Provider>),
    document.getElementById(`root`)
  );
};

init();
