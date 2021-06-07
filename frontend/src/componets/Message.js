import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => (
  <Alert
    variant={variant}
  >
    {children}
  </Alert>
);

Message.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

Message.defaultProps = {
  variant: 'info',
  children: 'message',
};

export default Message;
