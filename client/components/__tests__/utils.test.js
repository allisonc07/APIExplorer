import utils from '../../utils';

describe('Test suite for utils', () => {
  it('should make an axios call when axiosPostOrPut is called', () => {
    const axios = jest.fn(() => 'response');
    utils.axiosPostOrPut('POST', 'https://jsonplaceholder.typicode.com/users/1', {}, (response) => {
      expect(axios).toHaveBeenCalled();
      expect(response).toBe('response');
      done();
    })
  });


  it('should make an axios call when axiosGetOrDelete is called', () => {
    const axios = jest.fn(() => 'response');
    utils.axiosGetOrDelete('GET', 'https://jsonplaceholder.typicode.com/users/1', (response) => {
      expect(axios).toHaveBeenCalled();
      expect(response).toBe('response');
      done();
    })
  });

});
