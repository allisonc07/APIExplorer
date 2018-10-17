# API Explorer

 This API Explorer repo can be used to generate API Explorer components with any configuration you would like! Users will then be able to input any value(s) they would like to query an API with, and see the response that the API sends back.


## Requirements


- Node 6.13.0 or above


### Installing Dependencies

From within the root directory:

```sh
npm install -g live-server
npm install
```

## Usage

 To provide your own configuration, simply change the `config` object in the `apiconfig.js` to an object that follows the following shape:

```
{
  title: 'Create new user',
  url: 'https://jsonplaceholder.typicode.com/users',
  method: 'POST',
  body: [
    {
      name: 'email',
      type: 'email',
      max: 24,
      min: 3,
    },
    {
      name: 'full-name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
    },
    {
      name: 'phone',
      type: 'tel',
    },
  ]
}
```
 'POST' and 'PUT' requests can have bodies, but 'GET' and 'DELETE' requests do not require a body property.
 To use the API Explorer, make sure you have a configuration object loaded in `apiconfig.js`, and that you have installed all dependencies. Then, enter `npm run build` and `npm start` in the root directory in separate terminal shells, and you will be able to use the API Explorer!

> To run tests, enter `npm test` from the root directory.
