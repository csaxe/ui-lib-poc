import React from 'react';
import PropTypes from 'prop-types';
import './KeywordSearchForm.scss';
import classnames from 'classnames';

export const KeywordSearchForm = props => {
  const {
    variant,
    tagName,
    extraClasses,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const className = classnames([
    'KeywordSearchForm',
    `KeywordSearchForm-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default KeywordSearchForm;

KeywordSearchForm.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

KeywordSearchForm.defaultProps = {
  variant: 'default',
  tagName: 'div',
  extraClasses: [],
}
