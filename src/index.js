import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/* Containers */
import App from './containers/App';
import StageForm from './containers/StageForm';

/* Components */
import NotFound from './components/404.component';
import About from './components/about.component';
import NavBar from './components/navbar.component';
import Footer from './components/footer.component';

/* library files */
import registerServiceWorker from './lib/registerServiceWorker';

/* SASS */
import './styles/index.scss';

// ------STORE--------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
// ------STORE--------

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div id="source">

        <header id="global-nav-header">
          <NavBar />
        </header>

        <Route exact path="/" component={ App } />
        <Route path="/about" component={ About } />
        <Route path="/addinfo" component={ StageForm } />
        <Route path="/404" component={ NotFound } />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();