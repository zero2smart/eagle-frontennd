import React, { Component } from "react";
import "./index.scss";
import JobManagement from './JobManagement';

class Dashboard extends Component {
    ACTIVE_TAB = 0;
    COMPLETED_TAB = 1;

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.ACTIVE_TAB
        };

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(e, status) {
        this.setState({ activeTab: status });
    }

    render() {
        const hoverStyle = {
            borderBottom: '3px solid #21D2F9'
        };

        return (
            <div className="dashboard-container">
                <div className="tab-block">
                    <div className="tab-block__left">
                        <span style={this.state.activeTab === this.ACTIVE_TAB ? hoverStyle : {}} onClick={e => this.switchTab(e, this.ACTIVE_TAB)}>Active</span>
                        <span style={this.state.activeTab === this.COMPLETED_TAB ? hoverStyle : {}} onClick={e => this.switchTab(e, this.COMPLETED_TAB)}>Completed</span>
                    </div>
                    <div className="tab-block__right">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="job-list-block">
                    <JobManagement />
                </div>
            </div>
        );
    }
}

export default Dashboard;