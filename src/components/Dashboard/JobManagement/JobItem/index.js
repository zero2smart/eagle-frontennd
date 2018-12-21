import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class JobItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.job.job_id}</th>
                <td>{this.props.job.quarry_name}</td>
                <td>{this.props.job.quarry_address}</td>
                <td>{this.props.job.material}</td>
                <td>{this.props.job.customer_name}</td>
                <td>{this.props.job.job_site}</td>
                <td>{this.props.job.quantity}</td>
                <td>{this.props.job.haul_rate}</td>
                <td>
                    <FontAwesomeIcon className="fa-my-plus-square" color="#E3E3E3" icon={faPlusSquare} onClick={this.toggleSideBar} />
                </td>
            </tr>

        );
    }
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem;