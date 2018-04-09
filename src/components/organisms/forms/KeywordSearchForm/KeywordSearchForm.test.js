import React from 'react';
import { shallow } from 'enzyme';
import KeywordSearchForm from './KeywordSearchForm';

it('renders without crashing', () => {
  shallow(<KeywordSearchForm />);
});
