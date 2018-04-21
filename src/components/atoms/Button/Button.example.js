import React from 'react';
import Wrapper from '../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../styleguideComponents/Example/Example';
import Button from './Button';

function rendering(props) { return (<Button {...props}>Hello</Button>); }

export const ButtonExample = () => {
  return (
    <Wrapper title="Button Examples">
      <Example
        title="Default Rendering"
        rendering={rendering}
      />
      <Example
        title="Primary Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'primary',
        }}
      />
      <Example
        title="Secondary Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'secondary',
        }}
      />
      <Example
        title="Tertiary Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'tertiary',
        }}
      />
      <Example
        title="'Web 2.0' Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'web20',
        }}
      />
      <Example
        title="Link Variant"
        rendering={rendering}
        renderingProps={{
          variant: 'link',
        }}
      />
      <Example
        title="Disabled button"
        rendering={rendering}
        renderingProps={{
          disabled: true,
        }}
      />
      <Example
        title="Small Primary Variant"
        rendering={rendering}
        renderingProps={{
          size: 'small',
        }}
      />
      <Example
        title="Large Primary Variant"
        rendering={rendering}
        renderingProps={{
          size: 'large',
        }}
      />
    </Wrapper>
  );
};

export default ButtonExample;
