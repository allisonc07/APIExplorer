import React from 'react';
import { shallow } from 'enzyme';

import ExplorerComponent from '../ExplorerComponent';
import utils from '../../utils';
import sampleRequest from './sampleData/sampleRequest';
import sampleResponse from './sampleData/sampleResponse';

describe('Test suite for ExplorerComponent', () => {
  const defaultProps = sampleRequest;

  let wrapper = shallow(<ExplorerComponent {...defaultProps} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render a RequestType Component', () => {
    expect(wrapper.find('RequestType').length).toBe(1);
  });

  it('should render a RequestBody Component', () => {
    expect(wrapper.find('RequestBody').length).toBe(1);
  });

  it('should render a Response Component', () => {
    expect(wrapper.find('Response').length).toBe(1);
  });


  it('should update state when handleChange is called', () => {
    const expectedState = {
      email: 'abc123@gmail.com'
    }
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 'abc123@gmail.com'
      }
    }
    instance.handleChange(event, 'email');
    expect(instance.state.inputValues).toEqual(expectedState);
  });

  it('should call correct utils.axiosPostOrPut to send request to API when handleSubmit is called with method "POST"', () => {
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    }
    utils.axiosPostOrPut = jest.fn(() => { });
    instance.handleSubmit(event);
    expect(utils.axiosPostOrPut).toHaveBeenCalled();
  });

  it('should update state when setResponseOnState is called', () => {
    const instance = wrapper.instance();
    const expectedResponse = JSON.stringify(sampleResponse, null, 2);
    const response = {
      data: sampleResponse,
    }
    instance.setResponseOnState(response);

    expect(instance.state.response).toBe(expectedResponse);
  });

  it('should call correct utils.axiosGetOrDelete to send request to API when handleSubmit is called with method "GET"', () => {
    const getProps = {
      title: 'Get users',
      url: 'https://jsonplaceholder.typicode.com/users/1',
      method: 'GET',
    }
    wrapper = shallow(<ExplorerComponent {...getProps} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    }
    utils.axiosGetOrDelete = jest.fn(() => { });
    instance.handleSubmit(event);
    expect(utils.axiosGetOrDelete).toHaveBeenCalled();
  });

});
