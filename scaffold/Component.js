import React from 'react';
import PropTypes from 'prop-types';
import './Component.scss';
import classnames from 'classnames';

export const Component = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'Component',
    `Component-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default Component;

Component.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

Component.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
