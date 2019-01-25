import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import JobItem from './JobItem';
import { getJobsAction } from '../../../actions';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from 'react-sortable-hoc';

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
    }

    shouldComponentUpdate(prevProps, prevState) {
        console.log(prevState);
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
                            this.props.jobs.filter(job => job.job_id.toString().indexOf(this.props.searchTerm) !== -1).map((job, i) => {
                                let isAllMinus = true;

                                for (let j = 0; j < jts.length; j++) {
                                    if (jts[j] === true) {
                                        isAllMinus = false;
                                        break;
                                    }
                                }

                                return <JobItem
                                        key={job.job_id}
                                        job={job}
                                        index={i}
                                        idx={i}
                                        className={isAllMinus ? 'o-100' : ''}
                                        applyToggleStatus={this.applyToggleStatus}
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
    jobToggleStatus: PropTypes.array.isRequired,
    status: PropTypes.number.isRequired,
    searchTerm: PropTypes.string.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    tabStatus: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    jobs: state.dashboard.jobs,
    jobToggleStatus: state.dashboard.jobToggleStatus,
    tabStatus: state.dashboard.tabStatus
});

const mapDispatchToProps = dispatch => ({
    getJobsAction: () => dispatch(getJobsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SortableContainer(JobManagement));