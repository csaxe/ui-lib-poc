import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import './KeywordSearchForm.scss';
import TextInput from '../../../atoms/TextInput/TextInput';
import Label from '../../../atoms/Label/Label';
import Button from '../../../atoms/Button/Button';
import classnames from 'classnames';

export const KeywordSearchForm = props => {
  const {
    variant,
    tagName,
    identifier,
    extraClasses,
    labelText,
    inputAttr,
    children,
    ...attr,
  } = props;

  const Tag = tagName;

  const inputId = identifier || uid();

  const blockClassName = classnames([
    'KeywordSearchForm',
    `KeywordSearchForm-${variant}`,
    ...extraClasses,
  ]);

  return (
    <Tag className={blockClassName} {...attr}>
      <div className="KeywordSearchForm__description">
        <Label htmlFor={inputId} extraClasses={["KeywordSearchForm__label"]}>{labelText}</Label>
      </div>
      <div className="KeywordSearchForm__field">
        <TextInput extraClasses={["KeywordSearhForm__input"]} {...inputAttr} type="search" />
      </div>
      <div className="KeywordSearchForm__control">
        <Button extraClasses={["KeywordSearchForm__button"]}>Search</Button>
      </div>
      <div className="KeywordSearchForm__content">
        {children}
      </div>
    </Tag>
  );
};

export default KeywordSearchForm;

KeywordSearchForm.propTypes = {
  variant: PropTypes.oneOf(['default']),
  tagName: PropTypes.string,
  labelText: PropTypes.string,
  extraClasses: PropTypes.array,
  children: PropTypes.node,
}

KeywordSearchForm.defaultProps = {
  variant: 'default',
  tagName: 'div',
  labelText: 'Search',
  extraClasses: [],
}
