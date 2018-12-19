import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root d-flex">
                <div className={`${this.props.showSideBar ? '' : 'w-0'} sidebar-wrapper`}>
                </div>
                <div className="content-wrapper">
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    showSideBar: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    showSideBar: state.dashboard.showSideBar
});

export default connect(mapStateToProps)(App);