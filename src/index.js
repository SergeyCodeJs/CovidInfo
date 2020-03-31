import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import mainReducer from './redux/Reducers/mainReducer'
import { fetchData } from './actions/actions'
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

let store = createStore(mainReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

function getInitialState() {
  let stateUrls = Object.values(store.getState().urls);
  
  stateUrls.map(e => {
    store.dispatch(fetchData(e))
  })
}

getInitialState()

let app = (
<Provider store={store}>
  <App/>
</Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
