import React, { Component } from 'react';
import data from '../../data/data.json';
import {
  Container,
  ActionIcon,
  ActionTitle,
  LongActionTitle,
  ActionHR,
  ActionFields,
  Tweet,
  ActionInputLabel,
  EmailRecipient,
  EmailSubject,
  EmailBody,
  FacebookPost,
  CopyButton,
  Button
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
    this.setState({ [type]: e.target.value });
  };

  onCopy = () => {
    this.setState({ copied: true });
    if (document.getElementById('copyConfirm')) {
      document.getElementById('copyConfirm').style.display = 'inline-block';
    }
    setTimeout(() => {
      document.getElementById('copyConfirm').style.display = 'none';
    }, 1000);
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
        window.dataLayer.push({
          event: 'twitterAction',
          actionType: 'twitter'
        });
        break;
      case '3':
        let body = encodeURIComponent(
          decodeURIComponent(this.state.emailBodyValue)
        );
        window.location.href = `mailto:${
          this.state.emailRecipientValue
        }?subject=${this.state.emailSubjectValue}&body=${body}`;
        window.dataLayer.push({
          event: 'emailAction',
          actionType: 'email'
        });
        break;
      case '4':
        window.open('https://facebook.com/McDonaldsUS');
        window.dataLayer.push({
          event: 'facebookAction',
          actionType: 'facebook'
        });
    }
  };
  render() {
    let title, html, buttonRender;
    switch (this.props.actionNumber) {
      case '1':
        html = (
          <ActionFields
            className="ngp-form"
            data-form-url="https://actions.everyaction.com/v1/Forms/Poog4UAD5EuyeYGr4fXu3Q2"
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
            <ActionInputLabel> To </ActionInputLabel>
            <EmailRecipient
              type="text"
              value={this.state.emailRecipientValue}
              onChange={e => this.handleChange(e, 'emailRecipientValue')}
            />
            <br />
            <ActionInputLabel> Subject </ActionInputLabel>
            <EmailSubject
              type="text"
              value={this.state.emailSubjectValue}
              onChange={e => this.handleChange(e, 'emailSubjectValue')}
            />
            <br />
            <ActionInputLabel> Message </ActionInputLabel>
            <EmailBody
              type="text"
              value={decodeURIComponent(this.state.emailBodyValue)}
              onChange={e => this.handleChange(e, 'emailBodyValue')}
            />
            <CopyToClipboard
              onCopy={this.onCopy}
              text={this.state.facebookValue}
            >
              <CopyButton className="copy-btn--email copy-btn--emailBody">
                Copy
              </CopyButton>
            </CopyToClipboard>
            {this.state.copied ? (
              <span
                id="copyConfirm"
                className="copyConfirm copyConfirm--emailBody"
              >
                Copied.
              </span>
            ) : null}
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
              <CopyButton>Copy</CopyButton>
            </CopyToClipboard>
            {this.state.copied ? (
              <span id="copyConfirm" className="copyConfirm copyConfirm--FB">
                Copied.
              </span>
            ) : null}
            <br />
          </ActionFields>
        );
    }
    // don't render a button for the petition action
    // an embedded button is fetched
    if (this.props.actionNumber !== '1') {
      buttonRender = (
        <Button
          onClick={() => {
            this.props.handleActionTaken(this.props.actionNumber);
            this.handleSubmit(this.props.actionNumber);
          }}
        >
          {data.actionText['action' + [this.props.actionNumber]].button}
        </Button>
      );
      title = (
        <LongActionTitle>
          {data.actionText['action' + [this.props.actionNumber]].title}
          <ActionHR />
        </LongActionTitle>
      );
    } else {
      title = (
        <ActionTitle>
          {data.actionText['action' + [this.props.actionNumber]].title}
          <ActionHR />
        </ActionTitle>
      );
    }

    return (
      <Container>
        <ActionIcon src={this.props.actionIcon} />
        {title}
        {html}
        {buttonRender}
      </Container>
    );
  }
}
