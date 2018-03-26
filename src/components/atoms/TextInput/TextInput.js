import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';
import classnames from 'classnames';

export const TextInput = props => {
  const {
    type,
    width,
    display,
    extraClasses,
    ...attr,
  } = props;


  const className = classnames(
    'TextInput',
    `TextInput-${type}`,
    `TextInput-${width}`,
    {'TextInput-block': display === 'block'},
    ...extraClasses,
  );

  return (
    <input type={type} className={className} {...attr} />
  );
};

export default TextInput;

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'search', 'url', 'tel', 'email']),
  width: PropTypes.oneOf(['fill', 'short', 'medium', 'wide']),
  block: PropTypes.oneOf([null, 'block']),
  extraClasses: PropTypes.array,
}

TextInput.defaultProps = {
  type: 'text',
  width: 'fill',
  extraClasses: [],
}
