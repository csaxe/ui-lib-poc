import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classnames from 'classnames';

export const Button = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'Button',
    `Button-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

Button.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
