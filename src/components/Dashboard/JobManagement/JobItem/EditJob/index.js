import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Label, Input, Form, FormGroup } from 'reactstrap';
import MapContainer from './MapContainer';

class EditJob extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.openEditJobDialog} className={this.props.className}>
                <div className="left-bar"></div>
                <div className="header-options">
                    <div className="rectangle"></div>
                    <div className="hamburger">...</div>
                </div>
                <ModalHeader toggle={this.props.openEditJobDialog}>
                    1235
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="job-field w-192">
                            <label for="customerName">Customer Name</label>
                            <p name="customerName" id="customerName">Eagle / Persant</p>
                        </div>
                        <div className="job-field w-192">
                            <label for="quarryCodeName">Quarry Code Name</label>
                            <p name="quarryCodeName" id="quarryCodeName">7500 SW 23rd ST.</p>
                        </div>
                        <div className="job-field w-192">
                            <label for="customerName">Material</label>
                            <p name="material" id="material">Blended Fill</p>
                        </div>
                        <div className="job-field w-192">
                            <label for="customerName">Job Name</label>
                            <p name="jobName" id="jobName">Wawa Station 18-9312TDASDASD</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="job-field w-402">
                            <label for="deliveryAddress">Delivery Address</label>
                            <p name="deliveryAddress" id="deliveryAddress">2551 SW 13TH AVE RD 4 PLACE 2</p>
                        </div>
                        <div className="job-field w-192">
                            <label for="remarks">Remarks</label>
                            <p name="remarks" id="remarks">60-70 Loads</p>
                        </div>
                        <div className="job-field w-192">
                            <label for="truckRate">Truck Rate</label>
                            <p name="truckRate" id="truckRate">Truck Rate</p>
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
            </Modal>
        );
    }
}

EditJob.propTypes = {
    modal: PropTypes.bool.isRequired,
    openEditJobDialog: PropTypes.func.isRequired,
    trucks: PropTypes.array.isRequired
};

export default EditJob;