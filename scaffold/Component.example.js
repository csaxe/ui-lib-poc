import React from 'react';
import Wrapper from '../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../styleguideComponents/Example/Example';
import Component from './Component';

function rendering(props) { return (<Component {...props} />); }

export const ComponentExample = () => {
  return (
    <Wrapper title="Component Examples">
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

export default ComponentExample;
