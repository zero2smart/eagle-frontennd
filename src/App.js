import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';
import Dashboard from './components/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faList } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="root d-flex">
                        <div className="sidebar-wrapper">

                        </div>
                        <div className="content-wrapper">
                            <header className="row">
                                <div className="header-left-block col-xl-6 col-md-6 col-sm-6 col-xs-12">
                                    <FontAwesomeIcon className="fa-my-bars" color="#E3E3E3" icon={faBars} />
                                    <span>Eagle&nbsp;</span>
                                    <span>/ Dispatch</span>
                                </div>
                                <div className="header-right-block col-xl-6 col-md-6 col-sm-6 col-xs-12 float-sm-right text-sm-right float-md-right text-md-right float-xl-right text-xl-right">
                                    <ul>
                                        <li><span>View:</span></li>
                                        <li>
                                            <FontAwesomeIcon className="fa-my-list" color="#E3E3E3" icon={faList} />
                                            <span>Standard</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className="fa-my-list" color="#E3E3E3" icon={faList} />
                                            <span>Dashboard</span>
                                        </li>
                                    </ul>
                                </div>
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
