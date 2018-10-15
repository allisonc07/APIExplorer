import React from 'react';
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
    const data = body.reduce((dataObj, currentObj) => {
      dataObj[currentObj.name] = this.state.inputValues[currentObj.name];
      return dataObj;
    }, {});
    return data;
  }

  handleChange(event, inputName) {
    const { inputValues } = this.state;
    console.log(inputValues);
    inputValues[inputName] = event.target.value;
    this.setState({
      inputValues,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.method === 'POST' || this.props.method === 'PUT') {
      axios({
        method: this.props.method,
        url: this.props.url,
        data: this.createData(this.props.body)
      })
        .then((response) => {
          this.setState({
            response: response.data,
          });
        });
    } else {
      axios({
        method: this.props.method,
        url: this.props.url,
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
        <Body body={body} handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValues={inputValues} />
        <Response response={response} />
      </div>
    );
  }
}

export default ExplorerComponent;
