import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Login from './Containers/Login'
import TestUpload from './Containers/TestUpload'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/TestUpload" component={TestUpload} />
        <Route path="/" component={App} />
          <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
