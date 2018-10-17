import React from 'react';
import { shallow } from 'enzyme';

import RequestBody from '../RequestBody';
import sampleRequest from './sampleData/sampleRequest';

describe('Test suite for RequestBody', () => {
  const handleChange = () => { };
  const handleSubmit = jest.fn();

  const defaultProps = {
    body: sampleRequest.body,
    handleChange,
    handleSubmit,
    inputValues: {},
  };

  const wrapper = shallow(<RequestBody {...defaultProps} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render "Body" h3 if props.body is not null', () => {
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('should render a form element', () => {
    expect(wrapper.find('form').length).toBe(1);
  });


  it('should render the correct number of FormInput components', () => {
    expect(wrapper.find('FormInput').length).toBe(3);
  });

  it('should call the handleSubmit function when the form is submitted', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  });


});
