import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Healthpedia from './components/Healthpedia'; //protect
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import BaseLayout from './components/layout/BaseLayout';
import HealthInfo from './components/HealthArticles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// import * as Icon from 'react-bootstrap-icons';
import  './assets/styles.scss';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers/healthReducers';
import requireAuth from './requireAuth';
import Auth from './RequireAuthHooks';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
// import './index.css';
library.add( faStar);

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);


//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            {/* <Route path='/welcome' component={Welcome}/> */}
            <Route path='/register' component={Signup}/>
            <Route exact path="/healthpedia" render={()=>(
              <Auth>
                <Healthpedia />
              </Auth>
            )} />
            <Route exact path="/healthinfo" render={()=>(
              <Auth>
                <HealthInfo />
              </Auth>
            )} />
            <Route path='/signout' component={Signout}/>
            <Route path='/signin' component={Signin}/>
          </Switch>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


