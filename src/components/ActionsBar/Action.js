import React, { Component } from 'react';
import data from '../../data/data.json';
import {
  Container,
  ActionIcon,
  ActionTitle,
  ActionFields,
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

  handleChange = (e, type) => {
    console.log('e', e);
    this.setState({ [type]: e.target.value });
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
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            this.state.twitterValue
          )}`
        );
        break;
      case '3':
        window.location.href = `mailto:${
          this.state.emailRecipientValue
        }?subject=${this.state.emailSubjectValue}&body=${encodeURIComponent(
          this.state.emailBodyValue
        )}`;
        break;
      case '4':
        window.open('https://facebook.com/thehumaneleague');
    }
    alert(`you submitted action #${actionNumber}`);
  };
  render() {
    let html, buttonRender;
    switch (this.props.actionNumber) {
      case '1':
        html = (
          <ActionFields
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
          <ActionFields>
            <Tweet
              type="text"
              maxLength="280"
              value={this.state.twitterValue}
              onChange={e => this.handleChange(e, 'twitterValue')}
            />
            <br />
          </ActionFields>
        );
        break;
      case '3':
        html = (
          <ActionFields>
            <EmailRecipient
              type="text"
              value={this.state.emailRecipientValue}
              onChange={e => this.handleChange(e, 'emailRecipientValue')}
            />
            <br />
            <EmailSubject
              type="text"
              value={this.state.emailSubjectValue}
              onChange={e => this.handleChange(e, 'emailSubjectValue')}
            />
            <br />
            <EmailBody
              type="text"
              value={decodeURIComponent(this.state.emailBodyValue)}
              onChange={e => this.handleChange(e, 'emailBodyValue')}
            />
            <br />
          </ActionFields>
        );
        break;
      case '4':
        html = (
          <ActionFields>
            <FacebookPost
              type="text"
              value={this.state.facebookValue}
              onChange={e => this.handleChange(e, 'facebookValue')}
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
          </ActionFields>
        );
    }
    if (this.props.actionNumber !== '1') {
      buttonRender = (
        <button
          onClick={() => {
            this.props.addCheck(this.props.actionNumber);
            this.handleSubmit(this.props.actionNumber);
          }}
        >
          {data.actionText['action' + [this.props.actionNumber]].button}
        </button>
      );
    }
    return (
      <Container>
        <ActionIcon src={this.props.actionIcon} />
        <ActionTitle>
          {data.actionText['action' + [this.props.actionNumber]].title}
        </ActionTitle>
        {html}
        {buttonRender}
      </Container>
    );
  }
}
