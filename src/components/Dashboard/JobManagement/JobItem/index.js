import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class JobItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="job-item-container">
                {this.props.job.job_id}
            </div>
        );
    }
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem;