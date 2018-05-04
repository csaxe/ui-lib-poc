import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';
import classnames from 'classnames';

export const Heading = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'Heading',
    `Heading-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default Heading;

Heading.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

Heading.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
