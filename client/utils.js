import axios from 'axios';

const utils = {
  axiosPostOrPut: (method, url, inputValues, fn) => {
    axios({
      method,
      url,
      data: inputValues,
    })
      .then(fn);
  },
  axiosGetOrDelete: (method, url, fn) => {
    axios({
      method,
      url,
    })
      .then(fn);
  }

}

export default utils;