import React from 'react';
import Wrapper from '../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../styleguideComponents/Example/Example';
import Button from './Button';

function rendering(props) { return (<Button {...props} />); }

export const ButtonExample = () => {
  return (
    <Wrapper title="Button Examples">
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

export default ButtonExample;
