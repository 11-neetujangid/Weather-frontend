
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Signup from './Component/Pages/Signup';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers/reducer';
import thunk from 'redux-thunk';
import Signin from './Component/Pages/Signin';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import Dashboard from './Component/Pages/Dashboard';
import Logout from './Component/Pages/Logout';
import NavLinks from './Component/NavLinks';


const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
    <div className ="App">
      <Router>
        <header>
          <NavLinks/>

        </header>
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PublicRoute exact path="/" component={Signup} />
        <PublicRoute exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/logout" component={Logout} />
       

        </Switch>
      </Router>
    
    </div>
    </Provider>
  )
}

export default App;
