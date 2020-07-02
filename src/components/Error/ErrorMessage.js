import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        Something went wrong
      </div>
      <pre>{props.error.toString()}</pre>
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.any,
};

export default ErrorMessage;
