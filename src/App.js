import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
    return (
        <GithubState>
            <Router>
                <div className="App">
                    <Navbar title="Github Finder"/>
                    <div style={{padding: '0 40px'}}>
                        <Alert />
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' component={User}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
};

export default App;
