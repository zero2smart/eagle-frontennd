import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
    Label,
    Input,
    Form,
    FormGroup,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import MapContainer from './MapContainer';

class EditJob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionsOpen: false
        };

        // this.toggleOptions = this.toggleOptions.bind(this);
    }

    toggleOptions = () => {
        this.setState(prevState => ({
            optionsOpen: !prevState.optionsOpen
        }));
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.state.optionsOpen && this.optionsRef && !this.optionsRef.contains(event.target)) {
            this.toggleOptions();
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.openEditJobDialog} className={this.props.className}>
                <div className="left-bar"></div>
                {/* <div className="header-options">
                    <div className="rectangle"></div>
                    <div className="hamburger" onClick={this.toggleOptions}>...</div>
                </div> */}
                <div className="header-options">
                    <Button onClick={this.props.openEditJobDialog} className="btn__close">Close</Button>
                    <Button onClick={this.props.openEditJobDialog} className="btn__update">Update</Button>
                </div>
                <ModalHeader toggle={this.props.openEditJobDialog}>
                    {this.props.job.job_id}
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="job-field w-192">
                            <label for="customerName">Customer Name</label>
                            <input type="text" name="customerName" id="customerName" defaultValue={this.props.job.customer_name} />
                        </div>
                        <div className="job-field w-192">
                            <label for="quarryCodeName">Quarry Code Name</label>
                            <input type="text" name="quarryCodeName" id="quarryCodeName" defaultValue={this.props.job.quarry_name} />
                        </div>
                        <div className="job-field w-192">
                            <label for="material">Material</label>
                            <input type="text" name="material" id="material" defaultValue={this.props.job.material} />
                        </div>
                        <div className="job-field w-192">
                            <label for="jobName">Job Name</label>
                            <input type="text" name="jobName" id="jobName" defaultValue={this.props.job.job_site} />
                        </div>
                    </Row>
                    <Row>
                        <div className="job-field w-402">
                            <label for="deliveryAddress">Delivery Address</label>
                            <input type="text" name="deliveryAddress" id="deliveryAddress" defaultValue="2551 SW 13TH AVE RD 4 PLACE 2" />
                        </div>
                        <div className="job-field w-192">
                            <label for="remarks">Remarks</label>
                            <input type="text" name="remarks" id="remarks" defaultValue="60-70 Loads" />
                        </div>
                        <div className="job-field w-192">
                            <label for="truckRate">Truck Rate</label>
                            <input type="text" name="truckRate" id="truckRate" defaultValue={this.props.job.haul_rate} />
                        </div>
                    </Row>
                    <Row>
                        <div className="job-field w-822">
                            <label for="Trucks">Trucks</label>
                            <div name="trucks" id="trucks">
                                {this.props.trucks.map((n, i) => (
                                    <div className="job-number" key={i}>
                                        {n}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Row>
                    <Row className="map-container">
                        <MapContainer />
                    </Row>
                </ModalBody>
                <div className={`${this.state.optionsOpen ? 'options-dropdown' : 'd-none'}`} ref={node => this.optionsRef = node}>
                    <p className="options-item">
                        View Order
                    </p>
                    <p className="options-item">
                        Edit Order
                    </p>
                    <p className="options-item">
                        Cancel Order
                    </p>
                </div>
            </Modal>
        );
    }
}

EditJob.propTypes = {
    modal: PropTypes.bool.isRequired,
    openEditJobDialog: PropTypes.func.isRequired,
    trucks: PropTypes.array.isRequired,
    job: PropTypes.object.isRequired
};

export default EditJob;