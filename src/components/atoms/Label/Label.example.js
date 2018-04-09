import React from 'react';
import Wrapper from '../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../styleguideComponents/Example/Example';
import Label from './Label';

function rendering(props) { return (<Label {...props}>This is a label</Label>); }

export const LabelExample = () => {
  return (
    <Wrapper title="Label Examples">
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

export default LabelExample;
