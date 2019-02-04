import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import JobItem from './JobItem';
import { getJobsAction, getAvailableTrucksAction } from '../../../actions';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from 'react-sortable-hoc';
import { ACTIVE_TAB, COMPLETE_TAB } from '../../../constants';

class JobManagement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobToggleStatus: []
        };

        this.applyToggleStatus = this.applyToggleStatus.bind(this);
    }

    componentDidMount() {
        this.props.getJobsAction();
        this.props.getAvailableTrucks();
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true;
    }

    applyToggleStatus(jts) {
        this.setState({ jobToggleStatus: jts });
    }

    render() {
        let jts = this.state.jobToggleStatus;
        let dd = {
            opacity: 1 + ' !important',
            zIndex: 100
        };

        return (
            <div className="job-management-container">
                <Table>
                    <tbody>
                        {
                            this.props.tabStatus === ACTIVE_TAB ?
                                this.props.jobs.filter(job => job.status === "active").filter(job => job.job_id.toString().indexOf(this.props.searchTerm) !== -1
                                || job.customer_name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !== -1
                                || this.props.trucks.includes(Number(this.props.searchTerm))
                                || job.dispatched_trucks.includes(Number(this.props.searchTerm))).map((job, i) => {
                                let isAllMinus = true;

                                for (let key in jts) {
                                    if (jts[key] === true) {
                                        isAllMinus = false;
                                        break;
                                    }
                                }

                                return <JobItem
                                        key={job.job_id}
                                        job={job}
                                        index={i}
                                        idx={i}
                                        trucks={this.props.trucks}
                                        className={isAllMinus ? 'o-100' : ''}
                                        hasSearchKeyword={this.props.searchTerm.length === 0 ? false : true}
                                        applyToggleStatus={this.applyToggleStatus}
                                        status={this.props.status} />;
                            }) :
                                this.props.jobs.filter(job => job.status === "completed").filter(job => job.job_id.toString().indexOf(this.props.searchTerm) !== -1
                                || job.customer_name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !== -1
                                || this.props.trucks.includes(Number(this.props.searchTerm))
                                || job.dispatched_trucks.includes(Number(this.props.searchTerm)))
                                .filter(job => new Date(job.date) >= this.props.startDate
                                    && new Date(job.date) <= this.props.endDate).map((job, i) => {
                                    let isAllMinus = true;

                                    for (let key in jts) {
                                        if (jts[key] === true) {
                                            isAllMinus = false;
                                            break;
                                        }
                                    }

                                    return <JobItem
                                        key={job.job_id}
                                        job={job}
                                        index={i}
                                        idx={i}
                                        trucks={this.props.trucks}
                                        className={isAllMinus ? 'o-100' : ''}
                                        applyToggleStatus={this.applyToggleStatus}
                                        hasSearchKeyword={this.props.searchTerm.length === 0 ? false : true}
                                        status={this.props.status} />;
                                })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

JobManagement.propTypes = {
    jobs: PropTypes.array.isRequired,
    jobToggleStatus: PropTypes.object.isRequired,
    status: PropTypes.number.isRequired,
    searchTerm: PropTypes.string.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    tabStatus: PropTypes.number.isRequired,
    getJobsAction: PropTypes.func.isRequired,
    getAvailableTrucks: PropTypes.func.isRequired,
    trucks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    jobs: state.dashboard.jobs,
    jobToggleStatus: state.dashboard.jobToggleStatus,
    tabStatus: state.dashboard.tabStatus,
    trucks: state.dashboard.trucks
});

const mapDispatchToProps = dispatch => ({
    getJobsAction: () => dispatch(getJobsAction()),
    getAvailableTrucks: () => dispatch(getAvailableTrucksAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SortableContainer(JobManagement));