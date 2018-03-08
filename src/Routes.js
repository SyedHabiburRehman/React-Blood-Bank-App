import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app/App';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './components/home';
import Dashboard from './components/dashboard/dashboard';
import RegisterDonor from './components/registerDonor/registerDonor';
import RequiredBloodList from './components/requiredBlood/requiredBlood';
import DonorDetail from './components/donorDetail/donorDetail';
import requireAuth from './components/requireHOC/authentication';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Login} />
                
                    <Route path="/home" component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={requireAuth(Dashboard)} />
                    <Route path="/requiredbloodlist" component={RequiredBloodList} />
                    <Route path="/registerdonor" component={RegisterDonor}/>
                    <Route path="/dashboard/donordetail/:id" component={DonorDetail}/>
                </Route>
                

            </Router>
        )
    }
}
export default Routes;
