import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classnames from 'classnames';

export const Button = props => {
  const {
    variant,
    size,
    display,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'Button',
    `Button-${variant}`,
    `Button-${size}`,
    {'Button-block': (display === 'block')},
    {'Button-disabled': (props.disabled)},
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
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link', 'web20']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  display: PropTypes.oneOf(['block', 'flushLeft']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  tagName: 'button',
  extraClasses: [],
}
