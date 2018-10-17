import React from 'react';
import { shallow } from 'enzyme';

import Response from '../Response';
import sampleResponseData from './sampleData/sampleResponse';

describe('Test suite for Response', () => {
  const defaultProps = {
    response: sampleResponseData
  };
  const wrapper = shallow(<Response {...defaultProps} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render Response title', () => {
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('should render .responseWrapper div', () => {
    expect(wrapper.find('.responseWrapper').length).toBe(1);
  });

  it('should render .responseText div', () => {
    expect(wrapper.find('.responseText').length).toBe(1);
  });

  it('should render appropriate response text in .responseText div', () => {
    expect(wrapper.find('.responseText').text()).toBe(sampleResponseData);
  });
});
