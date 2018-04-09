import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';
import classnames from 'classnames';

export const Label = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'Label',
    `Label-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default Label;

Label.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

Label.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
