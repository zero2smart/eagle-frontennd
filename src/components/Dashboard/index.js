import React, { Component } from "react";
import "./index.scss";
import JobManagement from './JobManagement';
import { ACTIVE_TAB, COMPLETED_TAB } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: ACTIVE_TAB,
            openCalendar: false
        };

        this.switchTab = this.switchTab.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    switchTab(e, status) {
        this.setState({ activeTab: status });
    }

    toggleCalendar() {
        this.setState( { openCalendar: !this.state.openCalendar });
    }

    handleSelect(range) {
        console.log(range); // Momentjs object
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
                    <div className="tab-block__middle">
                        <span>Date Range:&nbsp;</span>
                        <span id="date">Select</span>
                        <span className="down-arrow">
                            <FontAwesomeIcon className="fa-my-down" color="#ffffff" icon={faChevronDown} onClick={this.toggleCalendar} />
                        </span>
                    </div>
                    <div className="tab-block__right">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="job-list-block">
                    <JobManagement status={this.state.activeTab} />
                </div>
                {this.state.openCalendar &&
                    <div className="calendar"><DateRange
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
                    /></div>}
            </div>
        );
    }
}

export default Dashboard;