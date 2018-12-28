import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import faPlus from '../../../../assets/images/plus-symbol-in-a-rounded-black-square.png';
import faMinus from '../../../../assets/images/minus-sign-inside-a-black-circle.png';

class JobItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showTruckList: false,
            truckStatusList: []
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.toggleTruckList = this.toggleTruckList.bind(this);
        this.addTruck = this.addTruck.bind(this);

        this.truckElements = [];
    }

    toggleSideBar() {

    }

    toggleTruckList() {
        this.setState({ showTruckList: !this.state.showTruckList });
    }

    addTruck(i) {
        this.truckElements[i].style.color = '#626269';
        this.truckElements[i].style.borderColor = '#626269';
    }

    render() {
        return (
            <React.Fragment>
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
                        {/* <FontAwesomeIcon className="fa-my-plus-square" color="#E3E3E3" icon={faPlusSquare} onClick={this.toggleSideBar} /> */}
                        {!this.state.showTruckList ?
                            <img src={faPlus} className="fa-my-plus-square" alt="Plus Square" width={20} height={20} onClick={this.toggleTruckList} />
                            : <img src={faMinus} className="fa-my-minus-square" alt="Minus Square" width={20} height={20} onClick={this.toggleTruckList} />
                        }
                    </td>
                    <td>
                        <div></div>
                    </td>
                </tr>
                <tr className={`${!this.state.showTruckList ? 'd-none' : ''} truck-section`}>
                    <div className="truck-list">
                        <div className="d-flex-wrap">
                            {[100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                            121, 122, 123, 124, 125, 126, 127, 128].map((n, i) => (
                                <div className="truck-number" onClick={() => this.addTruck(i)} ref={node => this.truckElements[i] = node}>
                                    {n}
                                </div>
                            ))}
                        </div>
                    </div>
                </tr>
            </React.Fragment>
        );
    }
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem;