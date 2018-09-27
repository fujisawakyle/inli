import React, { Component } from 'react';
import S3 from 'aws-sdk/clients/s3';
import AWS from 'aws-sdk';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  // This id is not useful for anything but grabbing test-bucket-thl contents:
  IdentityPoolId: 'us-east-1:fba80304-ecf2-436b-a929-9ec844e2edd4',
});
const BUCKET_NAME = 'test-bucket-thl';
const urlFor = (fileName) => `https://s3.amazonaws.com/${BUCKET_NAME}/${fileName}`;

export default function (NestedComponent) {
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.state = { pictures: [] };
    }

    componentDidMount() {
      const s3 = new S3();
      s3.listObjects({ Bucket: BUCKET_NAME }, (error, result) => {
        this.mapObjectsToState(result.Contents);
      });
    }

    render() {
      const { props } = this;
      return <NestedComponent {...props} pictures={this.state.pictures} />
    }


    mapObjectsToState(contents) {
      this.setState({
        pictures: contents.map(item => ({ src: urlFor(item.Key) }))
      });
    }
  }
  return WrappedComponent;
}
