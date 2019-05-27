import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import {actionCreator} from "./reducer";

import App from './components/app/app.jsx';
import films from './mocks/films.js';


const init = () => {
  const appStore = createStore(reducer);

  appStore.dispatch(actionCreator.getFilteredFilms(films));

  ReactDOM.render(
    (<Provider store={appStore}>
      <App/>
    </Provider>),
    document.getElementById(`root`)
  );
};

init();
