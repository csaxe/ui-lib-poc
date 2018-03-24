import React from 'react';
import Wrapper from '../../../styleguideComponents/Wrapper/Wrapper';
import Example from '../../../styleguideComponents/Example/Example';
import TextInput from './TextInput';

function rendering (props) { return (<TextInput {...props} />); }

export const TextInputExample = () => {
  return (
    <Wrapper title="TextInput Examples">
      <Example
        rendering={rendering}
        title="Default Rendering"
      />
      <Example
        title="Short Input Type 'text'"
        rendering={rendering}
        renderingProps={{
          width: 'short',
          type: 'text',
        }}
      />
      <Example
        title="Medium Input, Type 'text'"
        rendering={rendering}
        renderingProps={{
          width: 'medium',
          type: 'text',
        }}
      />
      <Example
        title="Wide Input, Type 'text'"
        rendering={rendering}
        renderingProps={{
          width: 'wide',
          type: 'text',
        }}
      />
      <Example
        title="Wide Input, Type 'search'"
        rendering={rendering}
        renderingProps={{
          width: 'wide',
          type: 'search',
        }}
      />
      <Example
        title="Wide Input, Type 'url'"
        rendering={rendering}
        renderingProps={{
          width: 'wide',
          type: 'url',
        }}
      />
      <Example
        title="Wide Input, Type 'tel'"
        rendering={rendering}
        renderingProps={{
          width: 'wide',
          type: 'tel',
        }}
      />
      <Example
        title="Wide Input, Type 'email'"
        rendering={rendering}
        renderingProps={{
          width: 'wide',
          type: 'email',
        }}
      />

    </Wrapper>
  );
};

export default TextInputExample;
