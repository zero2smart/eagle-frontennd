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
                        {this.props.jobs.map((job, i) => {
                            let isAllMinus = true;
                            for (let j = 0; j < this.props.jobToggleStatus.length; j++) {
                                if (this.props.jobToggleStatus[j] === true) {
                                    isAllMinus = false;
                                    break;
                                }
                            }
                            return <JobItem key={job.job_id} job={job} index={i} style={isAllMinus ? {opacity: '1'} : {}} />;
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

JobManagement.propTypes = {
    jobs: PropTypes.array.isRequired,
    jobToggleStatus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        jobs: state.dashboard.jobs,
        jobToggleStatus: state.dashboard.jobToggleStatus
    };
};

const mapDispatchToProps = dispatch => ({
    getJobsAction: () => dispatch(getJobsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(JobManagement);