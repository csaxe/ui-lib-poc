import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const types = ['text', 'search', 'url', 'tel', 'email'];

describe('<TextInput />', () => {
  it('renders without crashing', () => {
    shallow(<TextInput />);
  });

  it('renders the correct input type when `type` is set', () => {
    expect(types.reduce((acc, type) => acc + ( shallow(<TextInput type={type} />).find(`input[type="${type}"]`).length ), 0) ).toEqual(types.length);
  });
});
