import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RequestType from './RequestType';
import Body from './Body';
import Response from './Response';

class ExplorerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {},
      response: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createData(body) {
    const { inputValues } = this.state;
    const data = body.reduce((dataObj, currentObj) => {
      dataObj[currentObj.name] = inputValues[currentObj.name];
      return dataObj;
    }, {});
    return data;
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
    const { url, method, body } = this.props;
    if (method === 'POST' || method === 'PUT') {
      axios({
        method,
        url,
        data: this.createData(body)
      })
        .then((response) => {
          this.setState({
            response: JSON.stringify(response.data, null, 2),
          });
        });
    } else {
      axios({
        method,
        url,
      })
        .then((response) => {
          this.setState({
            response: response.data,
          });
        });
    }
  }

  render() {
    const { title, method, url, body } = this.props;
    const { response, inputValues } = this.state;
    return (
      <div>
        <RequestType title={title} method={method} url={url} />
        <Body
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
