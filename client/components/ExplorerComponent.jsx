import React from 'react';
import PropTypes from 'prop-types';

import RequestType from './RequestType';
import RequestBody from './RequestBody';
import Response from './Response';
import utils from '../utils';
import style from '../styles/ExplorerComponent.css';

class ExplorerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {},
      response: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setResponseOnState = this.setResponseOnState.bind(this);
  }

  setResponseOnState(response) {
    this.setState({
      response: JSON.stringify(response.data, null, 2),
    });
  }

  handleChange(event, inputName) {
    const { inputValues } = this.state;
    inputValues[inputName] = event.target.value;
    this.setState({
      inputValues,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { url, method } = this.props;
    const { inputValues } = this.state;
    if (method === 'POST' || method === 'PUT') {
      utils.axiosPostOrPut(method, url, inputValues, this.setResponseOnState);
    } else {
      utils.axiosGetOrDelete(method, url, this.setResponseOnState);
    }

  }


  render() {
    const {
      title, method, url, body,
    } = this.props;
    const { response, inputValues } = this.state;
    return (
      <div className={style.body}>
        <RequestType title={title} method={method} url={url} />
        <RequestBody
          body={body}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValues={inputValues}
        />
        <Response response={response} />
      </div>
    );
  }
}

ExplorerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.object),
}

export default ExplorerComponent;
