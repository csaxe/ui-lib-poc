import React from 'react';
import Wrapper from '../../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../../styleguideComponents/Example/Example';
import KeywordSearchForm from './KeywordSearchForm';

function rendering(props) { return (<KeywordSearchForm {...props} />); }

export const KeywordSearchFormExample = () => {
  return (
    <Wrapper title="KeywordSearchForm Examples">
      <Example
        title="Default Rendering"
        rendering={rendering}
      />
      <Example
        title="Default Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'default',
        }}
      />
    </Wrapper>
  );
};

export default KeywordSearchFormExample;
