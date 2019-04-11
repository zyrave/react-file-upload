import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  msg: PropTypes.string.isRequired
};

const Message = ({ msg }) => (
  <div className="alert alert-info alert-dismissible fade show" role="alert">
    {msg}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

Message.propTypes = propTypes;

export default Message;
