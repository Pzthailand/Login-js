import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//CSS
import './index.css'
import './App.css'

import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Components/Reducer/index.jsx'

const store = legacy_createStore(rootReducer,composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
)
