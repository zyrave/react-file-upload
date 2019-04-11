import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  percentage: PropTypes.number.isRequired
};

const Progress = ({ percentage }) => (
  <div className="progress">
    <div
      className="progress-bar progress-bar-striped"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${percentage}%` }}
    >
      {percentage > 0 ? `${percentage}%` : null}
    </div>
  </div>
);

Progress.propTypes = propTypes;

export default Progress;
