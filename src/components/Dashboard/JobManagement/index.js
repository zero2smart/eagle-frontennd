import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import JobItem from './JobItem';
import { getJobsAction } from '../../../actions';
import { connect } from 'react-redux';

class JobManagement extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobsAction();
    }

    render() {
        return (
            <div className="job-management-container">
                {this.props.jobs.map(job => (
                    <JobItem key={job.job_id} job={job} />
                ))}
            </div>
        );
    }
}

JobManagement.propTypes = {
    jobs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    jobs: state.dashboard.jobs
});

const mapDispatchToProps = dispatch => ({
    getJobsAction: () => dispatch(getJobsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(JobManagement);