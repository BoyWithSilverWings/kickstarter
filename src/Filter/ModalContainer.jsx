import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';

function ModalContainer({open, restoreSession, closeModal}) {
  return (
    <Modal open={open} basic size='small'>
      <Header icon='archive' content='Restore old Session?' />
      <Modal.Content>
        <p>We can restore your old filters as you left them. </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={closeModal}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={restoreSession}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ModalContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  restoreSession: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default ModalContainer;

