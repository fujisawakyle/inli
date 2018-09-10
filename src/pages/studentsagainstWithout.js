import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MasonryMobile from '../components/MasonryMobile';
import MasonryDesktop from '../components/MasonryDesktop';
import Header from '../components/Header/Header';
import Footer from '../components/FooterSection/FooterSection';
import Media from 'react-media';
import Themed from '..//helpers/Themed';
import { StyledSection } from '../styles/styledComponents/blocks';
import heroBgSm from '../assets/images/students/campaigns-mcdonalds-imnotlovinit-students-hero-sm.jpg';
import heroBgLg from '../assets/images/students/campaigns-mcdonalds-imnotlovinit-students-hero-lg.jpg';
import { H1, H2, H3, P, Button } from '../styles/styledComponents/elements';
import data from '../data/data.json';
import emailIcon from '../assets/svg/emailIcon.svg';

import {
  Container,
  ActionIcon,
  ActionHR,
  ActionFields,
  EmailRecipient,
  EmailSubject,
  EmailBody,
  CopyButton,
  Button as AltButton
} from '../components/ActionsBar/Action.style';

import "../styles/styles.css";
import { fromThemeProps } from '../helpers/utilities';

let bricks = [
  { src: "https://s3.amazonaws.com/test-bucket-thl/carlsjrboycott.jpg" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/hardeesboycott.jpg" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/hardeesboycott2.jpg" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlblack.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlblue.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlgreen.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlgold.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thllime.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlmauve.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlpeach.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlrobinsegg.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlsalmon.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlwhite.png" },
  { src: "https://s3.amazonaws.com/test-bucket-thl/thlviolet.png" },
]

const brickOrder = [
  "portrait", "square", "square", "square", "square", "square", "square", "portrait", "square", "portrait", "square", "square"
]

bricks.map((brick, index) => {
  brick.type = brickOrder[index];
})

class StudentsAgainst extends Component {
  state = {
    emailRecipientValue: data.students.action.emailRecipient,
    emailSubjectValue: data.students.action.emailSubject,
    emailBodyValue: data.students.action.emailBody,
    copied: false
  }

  render() {

    return (
      <div style={{ background: '#fff' }}>
        <Header header="root" />
        <Themed dark>
          <StyledSection shaded backgroundImage={heroBgLg} padding="0.5em" paddingTop="6em" paddingBottom="0">
            <H1>{data.students.hero.title}</H1>
            <H3>{data.students.hero.subtitle}</H3>
            <Button href="#join">{data.students.hero.buttonText}</Button>
          </StyledSection>
        </Themed>
        <Themed>
          <StyledSection padding="1em" paddingTop="2em" paddingBottom="2em">
            <P>
              {data.students.bodyText[0]}
            </P>
            <P weight="bold">
              {data.students.bodyText[1]}
            </P>
            <P>
              {data.students.bodyText[2]}
            </P>
          </StyledSection>
        </Themed>
        <div style={{ paddingTop: '0em', paddingBottom: '2em', margin: '0 auto', width: '95%', maxWidth: '915px' }}>

          <Media query="(max-width: 575px)">
            {matches =>
              matches ? (
                <MasonryMobile bricks={bricks} />
              ) : (
                  <MasonryDesktop bricks={bricks} />
                )
            }
          </Media>

        </div>

        <a name="join" />
        <Themed dark >

          <Container height="max-content" padding="2em 1em" background={fromThemeProps("red")}>
            <H1>{data.students.action.title}</H1>
            <ActionIcon src={emailIcon} />
            <H2>
              {data.students.action.subtitle}
              <ActionHR />
            </H2>
            <ActionFields>
              <P marginBottom="0" marginTop="1em"> To </P>
              <EmailRecipient
                type="text"
                value={this.state.emailRecipientValue}
                onChange={e => this.handleChange(e, 'emailRecipientValue')}
              />
              <br />
              <P marginBottom="0" marginTop="1em"> Subject </P>
              <EmailSubject
                type="text"
                value={this.state.emailSubjectValue}
                onChange={e => this.handleChange(e, 'emailSubjectValue')}
              />
              <br />
              <P marginBottom="0" marginTop="1em"> Message </P>
              <EmailBody
                type="text"
                value={decodeURIComponent(this.state.emailBodyValue)}
                onChange={e => this.handleChange(e, 'emailBodyValue')}
              />
              <CopyToClipboard
                onCopy={this.onCopy}
                text={this.state.emailBodyValue}
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
            <AltButton>{data.students.action.buttonText}</AltButton>
          </Container>
        </Themed>
        <Footer />
      </div >
    )
  }

  //Helpers//

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
}

export default StudentsAgainst;
