import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';
import Dashboard from './components/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faList } from '@fortawesome/free-solid-svg-icons';
import dashboardNormal from './assets/images/dashboard_normal.png';
import dashboardClick from './assets/images/dashboard_click.png';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideBar: false
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    toggleSideBar() {
        this.setState({
            showSideBar: !this.state.showSideBar
        });
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="root d-flex">
                        <div className={`${this.state.showSideBar ? '' : 'w-0'} sidebar-wrapper`}>
                        </div>
                        <div className="content-wrapper">
                            <header className="d-flex">
                                <div className="header-left-block">
                                    <FontAwesomeIcon className="fa-my-bars" color="#E3E3E3" icon={faBars} onClick={this.toggleSideBar} />
                                    <span>Eagle&nbsp;</span>
                                    <span>/ Dispatch</span>
                                </div>
                                <div className="header-right-block">
                                    <ul>
                                        <li><span>View:</span></li>
                                        <li>
                                            <FontAwesomeIcon className="fa-my-list" color="#E3E3E3" icon={faList} />
                                            <span data-type="aw-label">Standard</span>
                                        </li>
                                        <li>
                                            <img src={dashboardClick} className="fa-my-dashboard" alt="Dashboard" width={25} />
                                            <span data-type="aw-label">Dashboard</span>
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