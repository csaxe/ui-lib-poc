import React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

it('renders without crashing', () => {
  shallow(<Component />);
});
