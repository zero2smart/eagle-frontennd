import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

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

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.openEditJobDialog}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.props.openEditJobDialog}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

EditJob.propTypes = {
    modal: PropTypes.bool.isRequired,
    openEditJobDialog: PropTypes.func.isRequired
};

export default EditJob;