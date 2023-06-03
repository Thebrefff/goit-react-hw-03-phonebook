import React from 'react';
import PropTypes from 'prop-types';

import css from './container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
