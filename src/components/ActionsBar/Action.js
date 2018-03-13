import React, { Component } from 'react';
import data from '../../data/data.json';
import {
  Tweet,
  EmailRecipient,
  EmailSubject,
  EmailBody,
  FacebookPost
} from './Action.style';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Action extends Component {
  state = {
    twitterValue: data.actionText.action2.tweet,
    emailRecipientValue: data.actionText.action3.recipient,
    emailSubjectValue: data.actionText.action3.subject,
    emailBodyValue: data.actionText.action3.body,
    facebookValue: data.actionText.action4.post,
    copied: false
  };
  handleTwitterChange = e => {
    this.setState({ twitterValue: e.target.value });
  };

  handleEmailRecipientChange = e => {
    this.setState({ emailRecipientValue: e.target.value });
  };

  handleEmailSubjectChange = e => {
    this.setState({ emailAddressValue: e.target.value });
  };

  handleEmailBodyChange = e => {
    this.setState({ emailBodyValue: e.target.value });
  };

  handleFacebookChange = e => {
    this.setState({ facebookValue: e.target.value, copied: false });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  handleSubmit = actionNumber => {
    switch (actionNumber) {
      case '1':
        break;
      case '2':
        window.open(
          `https://twitter.com/intent/tweet?text=${this.state.twitterValue}`
        );
        break;
      case '3':
        window.location.href = `mailto:${
          this.state.emailRecipientValue
        }?subject=${this.state.emailSubjectValue}&body=${
          this.state.emailBodyValue
        }`;
        break;
      case '4':
        window.open('https://facebook.com/thehumaneleague');
    }
    alert(`you submitted action #${actionNumber}`);
  };
  render() {
    let html;
    switch (this.props.actionNumber) {
      case '1':
        html = (
          <div
            className="ngp-form"
            data-form-url="https://actions.everyaction.com/v1/Forms/75X6VAefDkqf42b3crezsA2"
            data-fastaction-endpoint="https://fastaction.ngpvan.com"
            data-inline-errors="true"
            data-fastaction-nologin="true"
            data-databag-endpoint="https://profile.ngpvan.com"
            data-databag="everybody"
          />
        );
        break;
      case '2':
        html = (
          <div>
            <Tweet
              type="text"
              value={this.state.twitterValue}
              onChange={this.handleTwitterChange}
            />
            <br />
          </div>
        );
        break;
      case '3':
        html = (
          <div>
            <EmailRecipient
              type="text"
              value={this.state.emailRecipientValue}
              onChange={this.state.handleEmailRecipientChange}
            />
            <br />
            <EmailSubject
              type="text"
              value={this.state.emailSubjectValue}
              onChange={this.handleEmailSubjectChange}
            />
            <br />
            <EmailBody
              type="text"
              value={decodeURI(this.state.emailBodyValue)}
              onChange={this.handleEmailBodyChange}
            />
            <br />
          </div>
        );
        break;
      case '4':
        html = (
          <div>
            <FacebookPost
              type="text"
              value={this.state.facebookValue}
              onChange={this.handleFacebookChange}
            />
            <br />
            <CopyToClipboard
              onCopy={this.onCopy}
              text={this.state.facebookValue}
            >
              <button>Copy</button>
            </CopyToClipboard>
            {this.state.copied ? (
              <span style={{ color: 'red' }}>Copied.</span>
            ) : null}
            <br />
          </div>
        );
    }
    return (
      <div
        style={{ background: 'orange', height: '500px', textAlign: 'center' }}
      >
        <h1>{data.actionText['action' + [this.props.actionNumber]].title}</h1>
        {html}
        <button
          onClick={() => {
            this.props.addCheck(this.props.actionNumber);
            this.handleSubmit(this.props.actionNumber);
          }}
        >
          {data.actionText['action' + [this.props.actionNumber]].button}
        </button>
      </div>
    );
  }
}
