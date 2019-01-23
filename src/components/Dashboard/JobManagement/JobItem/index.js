import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { connect } from 'react-redux';
import { changeJobToggleStatusAction } from '../../../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
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
            jobList: [],
            modal: false,
            checked: false
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.toggleTruckList = this.toggleTruckList.bind(this);
        this.addTruck = this.addTruck.bind(this);
        this.openEditJobDialog = this.openEditJobDialog.bind(this);
        this.setJobToComplete = this.setJobToComplete.bind(this);

        this.truckElements = [];
    }

    setJobToComplete() {
        this.setState({ checked: true });
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
        this.truckElements[i].style.color = '#626269';
        this.truckElements[i].style.borderColor = '#626269';
        this.setState(prev => {
            let tmp = prev.jobList;
            tmp.push(n);
            return {
                jobList: tmp
            };
        });
    }

    render() {
        if (this.props.status === ACTIVE_TAB) {
            return (
                this.props.job.status === "active" ?
                    <React.Fragment>
                        <tr className={`${!this.state.showTruckList ? 'o-30' : ''}`} style={this.props.style}>
                            <th scope="active" onClick={this.openEditJobDialog}>{this.props.job.job_id}</th>
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
                                            : <img src={faMinus} className="fa-my-minus-square" alt="Minus Square" width={20} height={20} onClick={this.toggleTruckList} />
                                        }
                                    </div>
                                    <div className="job-item">
                                        {this.state.jobList.map((n, i) => (
                                            <div className="job-number" key={i}>
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
                                <div className="threedot">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="d-flex-wrap">
                                    {[100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                                        121, 122, 123, 124, 125, 126, 127, 128].map((n, i) => (
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
                            trucks={this.state.jobList}
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
                                        {this.props.job.trucks.map((n, i) => (
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
                            trucks={this.state.jobList}
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
    applyToggleStatus: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    status: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    jobToggleStatus: state.dashboard.jobToggleStatus
});

const mapDispatchToProps = dispatch => ({
    changeJobToggleStatus: (index, status) => dispatch(changeJobToggleStatusAction({ index: index, status: status }))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobItem);