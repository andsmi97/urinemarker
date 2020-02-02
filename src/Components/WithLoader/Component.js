import React from 'react';
import Loader from '../Loader/Component';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Loader /> : <WrappedComponent {...otherProps} />;
  };
  return Spinner;
};

export default WithSpinner;
