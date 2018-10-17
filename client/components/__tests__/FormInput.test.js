import React from 'react';
import { shallow } from 'enzyme';

import FormInput from '../FormInput';
import sampleRequest from './sampleData/sampleRequest';

describe('Test suite for FormInput', () => {
  const handleChange = jest.fn();
  const defaultProps = {
    inputDetails: sampleRequest.body[0],
    handleChange,
    inputValues: {},
  };

  const wrapper = shallow(<FormInput {...defaultProps} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correct label name', () => {
    expect(wrapper.find('label').text()).toBe('Email: ');
  });

  it('should render an input element', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render an input element with an empty value attribute initially', () => {
    expect(wrapper.find('input').props().value).toBe('');
  });

  it('should render an input element with the correct name', () => {
    expect(wrapper.find('input').props().name).toBe('email');
  });

  it('should render an input element with the correct type', () => {
    expect(wrapper.find('input').props().type).toBe('email');
  });

  it('should call the handleChange function when a change is detected', () => {
    const input = wrapper.find('input');
    input.simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });


});
