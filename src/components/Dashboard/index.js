import React, { Component } from "react";
import "./index.scss";
import JobManagement from './JobManagement';
import { ACTIVE_TAB, COMPLETED_TAB } from '../../constants';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: ACTIVE_TAB
        };

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(e, status) {
        this.setState({ activeTab: status });
    }

    render() {
        const activeStyle = {
            borderBottom: '3px solid #21D2F9'
        };

        const inActiveStyle = {
            borderBottom: '3px solid #282828'
        };

        return (
            <div className="dashboard-container">
                <div className="tab-block">
                    <div className="tab-block__left">
                        <span style={this.state.activeTab === ACTIVE_TAB ? activeStyle : inActiveStyle} onClick={e => this.switchTab(e, ACTIVE_TAB)}>Active</span>
                        <span style={this.state.activeTab === COMPLETED_TAB ? activeStyle : inActiveStyle} onClick={e => this.switchTab(e, COMPLETED_TAB)}>Completed</span>
                    </div>
                    <div className="tab-block__right">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="job-list-block">
                    <JobManagement status={this.state.activeTab} />
                </div>
            </div>
        );
    }
}

export default Dashboard;