import React from 'react';
import { shallow } from 'enzyme';

import RequestType from '../RequestType';
import sampleRequest from './sampleData/sampleRequest';

describe('Test suite for RequestType', () => {
  const defaultProps = sampleRequest;
  const wrapper = shallow(<RequestType {...defaultProps} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render request title', () => {
    expect(wrapper.find('h2').text()).toBe('Add new user');
  });

  it('should render .method h3', () => {
    expect(wrapper.find('.method').length).toBe(1);
  });

  it('should render correct method', () => {
    expect(wrapper.find('.method').text()).toBe('POST');
  });

  it('should render correct base url', () => {
    expect(wrapper.find('p').text()).toBe('https://jsonplaceholder.typicode.com');
  });
});
