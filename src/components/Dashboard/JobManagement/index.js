import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import JobItem from './JobItem';
import { getJobsAction } from '../../../actions';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

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
                <Table>
                    <tbody>
                        {this.props.jobs.map(job => (
                            <JobItem key={job.job_id} job={job} />
                        ))}
                    </tbody>
                </Table>
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