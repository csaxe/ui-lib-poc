import React from 'react';
import PropTypes from 'prop-types';
import './Example.scss';

let counter = 0;

export const Example = props => {
  const {
    title,
    rendering,
    renderingProps,
    children,
  } = props;

  const example = rendering(renderingProps);
  const exampleId = counter++;

  const showProps = () => {
    const propNames = Object.keys(renderingProps);

    return (
      propNames.length
      ? (
        <code className="Example__props">
          <ul>
            {propNames.map(propName => <li key={`${exampleId}_${propName}`}><strong>{propName}: </strong>"{renderingProps[propName]}"</li>)}
          </ul>
        </code>
      )
        : <p><em>No props were passed to the component</em></p>
    );
  }
  return (
    <div className="Example">
      {title && <h2>{title}</h2>}
      {children}
      <figure className="Example__figure">
        {example}
        <figcaption className="Example__caption">
          {showProps()}
        </figcaption>    
      </figure>
    </div>
  );
};

Example.propTypes = {
  title: PropTypes.string,
  rendering: PropTypes.func,
  renderingProps: PropTypes.object,
  children: PropTypes.node,
};

Example.defaultProps = {
  renderingProps: {},
}

export default Example;
