import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="root">
                        <div className="sidebar-wrapper">

                        </div>
                        <div className="content-wrapper">
                            <header>
                                <FontAwesomeIcon className="bars" color="#E3E3E3" icon={faBars} />
                                <span>Eagle&nbsp;</span>
                                <span>/ Dispatch</span>
                            </header>
                            <main>
                                <Switch>
                                    <Route exact path="/" component={Dashboard} />
                                </Switch>
                            </main>
                        </div>
                  </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
