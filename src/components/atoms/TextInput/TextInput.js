import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';
import classnames from 'classnames';

export const TextInput = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'TextInput',
    `TextInput-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default TextInput;

TextInput.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

TextInput.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
