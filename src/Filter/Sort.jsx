import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

function Sort({title}) {
  return (
    <div className='sorter'>
      <span>{title}&nbsp;&nbsp;</span>
      <Icon name='sort' />
    </div>
  );
}

Sort.propTypes = {
  title: PropTypes.string.isRequired
}

export default Sort;

