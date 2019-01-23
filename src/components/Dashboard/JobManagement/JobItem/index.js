import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.scss';
import { connect } from 'react-redux';
import {
    changeJobToggleStatusAction,
    removeJobInActiveAction,
    addTruckToListAction,
    removeTruckFromListAction
} from '../../../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import faPlus from '../../../../assets/images/plus-symbol-in-a-rounded-black-square.png';
import faPlusDisabled from '../../../../assets/images/disabled-plus-symbol-in-a-rounded-black-square.png';
import faMinus from '../../../../assets/images/minus-sign-inside-a-black-circle.png';
import EditJob from './EditJob';
import { ACTIVE_TAB, COMPLETED_TAB } from '../../../../constants';

class JobItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showTruckList: false,
            truckStatusList: [],
            modal: false,
            checked: false
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.toggleTruckList = this.toggleTruckList.bind(this);
        this.addTruck = this.addTruck.bind(this);
        this.removeTruck = this.removeTruck.bind(this);
        this.openEditJobDialog = this.openEditJobDialog.bind(this);
        this.setJobToComplete = this.setJobToComplete.bind(this);

        this.truckElements = [];
    }

    setJobToComplete() {
        this.setState({ checked: true });

        setTimeout(() => {
            this.props.removeJobInActive(this.props.job.job_id);
        }, 300);
    }

    openEditJobDialog() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleSideBar() {

    }

    toggleTruckList() {
        this.setState({ showTruckList: !this.state.showTruckList }, () => {
            this.props.changeJobToggleStatus(this.props.index, this.state.showTruckList);
            this.props.applyToggleStatus(this.props.jobToggleStatus);
        });
    }

    componentDidMount() {
        this.props.changeJobToggleStatus(this.props.index, this.state.showTruckList);
    }

    addTruck(n, i) {
        // this.truckElements[i].style.color = '#626269';
        // this.truckElements[i].style.borderColor = '#626269';

        this.props.addTruckToList(this.props.job.job_id, n);
    }

    removeTruck(n, i) {
        // this.truckElements[i].style.color = '#626269';
        // this.truckElements[i].style.borderColor = '#626269';

        this.props.removeTruckFromList(this.props.job.job_id, n);
    }

    render() {
        if (this.props.status === ACTIVE_TAB) {
            return (
                this.props.job.status === "active" ?
                    <React.Fragment>
                        <tr className={`${!this.state.showTruckList ? 'o-30' : ''}`} style={this.props.style}>
                            <th scope="active" className={`${this.props.job.dispatched_trucks.length > 0 && !this.state.showTruckList ? 'trucks-added' : ''}`} onClick={this.openEditJobDialog}>{this.props.job.job_id}</th>
                            <td>{this.props.job.quarry_name}</td>
                            <td>{this.props.job.quarry_address}</td>
                            <td>{this.props.job.material}</td>
                            <td>{this.props.job.customer_name}</td>
                            <td>{this.props.job.job_site}</td>
                            <td>{this.props.job.quantity}</td>
                            <td>{this.props.job.haul_rate}</td>
                            <td>
                                <div className="job-list">
                                    <div className="add-trucks">
                                        {/* <FontAwesomeIcon className="fa-my-plus-square" color="#E3E3E3" icon={faPlusSquare} onClick={this.toggleSideBar} /> */}
                                        {!this.state.showTruckList ?
                                            <img src={faPlus} className="fa-my-plus-square" alt="Plus Square" width={20} height={20} onClick={this.toggleTruckList} />
                                            : <FontAwesomeIcon className="fa-my-check" icon={faCheck} onClick={this.toggleTruckList} />
                                        }
                                    </div>
                                    <div className="job-item">
                                        {this.props.job.dispatched_trucks.map((n, i) => (
                                            <div className="job-number" onClick={() => this.removeTruck(n, i)} key={i}>
                                                {n}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div onClick={this.setJobToComplete} className={`${this.state.checked ? 'checked' : ''}`}></div>
                            </td>
                        </tr>
                        <tr className={`${!this.state.showTruckList ? 'd-none' : ''} truck-section`} style={this.props.style}>
                            <div className="truck-list">
                                <div className={`${this.props.job.dispatched_trucks.length > 0 ? 'threedot' : ''}`}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="d-flex-wrap">
                                    {this.props.job.trucks.map((n, i) => (
                                        <div className="truck-number" onClick={() => this.addTruck(n, i)} ref={node => this.truckElements[i] = node} key={i}>
                                            {n}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </tr>
                        <EditJob
                            className="edit-job-modal"
                            modal={this.state.modal}
                            trucks={this.props.job.dispatched_trucks}
                            job={this.props.job}
                            openEditJobDialog={this.openEditJobDialog} />
                    </React.Fragment> : null
            );
        } else if (this.props.status === COMPLETED_TAB) {
            return (
                this.props.job.status === "completed" ?
                    <React.Fragment>
                        <tr>
                            <th scope="completed" onClick={this.openEditJobDialog}>{this.props.job.job_id}</th>
                            <td>{this.props.job.quarry_name}</td>
                            <td>{this.props.job.quarry_address}</td>
                            <td>{this.props.job.material}</td>
                            <td>{this.props.job.customer_name}</td>
                            <td>{this.props.job.job_site}</td>
                            <td>{this.props.job.quantity}</td>
                            <td>{this.props.job.haul_rate}</td>
                            <td>
                                <div className="job-list">
                                    <div className="add-trucks">
                                        {/* <FontAwesomeIcon className="fa-my-plus-square" color="#E3E3E3" icon={faPlusSquare} onClick={this.toggleSideBar} /> */}
                                        <img src={faPlusDisabled} className="fa-my-plus-square-disabled" alt="Plus Square Disabled" width={20} height={20} />
                                    </div>
                                    <div className="job-item">
                                        {this.props.job.dispatched_trucks.map((n, i) => (
                                            <div className="job-number" key={i}>
                                                {n}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div></div>
                            </td>
                        </tr>
                        <EditJob
                            className="edit-job-modal"
                            modal={this.state.modal}
                            trucks={this.props.job.dispatched_trucks}
                            job={this.props.job}
                            openEditJobDialog={this.openEditJobDialog} />
                    </React.Fragment> : null
            );
        }
    }
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    jobToggleStatus: PropTypes.array.isRequired,
    changeJobToggleStatus: PropTypes.func.isRequired,
    removeJobInActive: PropTypes.func.isRequired,
    addTruckToList: PropTypes.func.isRequired,
    removeTruckFromList: PropTypes.func.isRequired,
    applyToggleStatus: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    status: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    jobToggleStatus: state.dashboard.jobToggleStatus
});

const mapDispatchToProps = dispatch => ({
    changeJobToggleStatus: (index, status) => dispatch(changeJobToggleStatusAction({ index: index, status: status })),
    removeJobInActive: (id) => dispatch(removeJobInActiveAction(id)),
    addTruckToList: (job_id, number) => dispatch(addTruckToListAction({ job_id: job_id, number: number })),
    removeTruckFromList: (job_id, number) => dispatch(removeTruckFromListAction({ job_id: job_id, number: number }))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobItem);