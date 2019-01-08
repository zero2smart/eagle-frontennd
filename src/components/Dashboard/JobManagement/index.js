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

        this.state = {
            jobToggleStatus: []
        };

        this.applyToggleStatus = this.applyToggleStatus.bind(this);
    }

    componentDidMount() {
        this.props.getJobsAction();
    }

    applyToggleStatus(jts) {
        this.setState({ jobToggleStatus: jts });
    }

    render() {
        let jts = this.state.jobToggleStatus;

        return (
            <div className="job-management-container">
                <Table>
                    <tbody>
                        {
                            this.props.jobs.map((job, i) => {
                            let isAllMinus = true;

                            for (let j = 0; j < jts.length; j++) {
                                if (jts[j] === true) {
                                    isAllMinus = false;
                                    break;
                                }
                            }
                            return <JobItem key={job.job_id} job={job} index={i} style={isAllMinus ? {opacity: 1} : {}} applyToggleStatus={this.applyToggleStatus} />;
                        })}
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