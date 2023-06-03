import React from 'react';
import PropTypes from 'prop-types';

import css from './filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
