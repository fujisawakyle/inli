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

import {
  Container,
  ActionIcon,
  ActionTitle,
  ActionHR,
  ActionFields,
  ActionInputLabel,
  EmailRecipient,
  EmailSubject,
  EmailBody,
  CopyButton
} from '../components/ActionsBar/Action.style';

import "../styles/styles.css";
import { fromThemeProps } from '../helpers/utilities';

const bricks = [
  {
    src: "501x501",
    type: "portrait"
  },
  {
    src: "502x502",
    type: "square"
  },
  {
    src: "503x503",
    type: "square"
  },
  {
    src: "504x504",
    type: "square"
  },
  {
    src: "505x505",
    type: "square"
  },
  {
    src: "506x506",
    type: "square"
  },
  {
    src: "507x507",
    type: "square"
  },
  {
    src: "508x508",
    type: "portrait"
  },
  {
    src: "509x509",
    type: "square"
  },
  {
    src: "510x510",
    type: "portrait"
  },
  {
    src: "511x511",
    type: "square"
  },
  {
    src: "512x512",
    type: "square"
  },
  {
    src: "513x513"
  },
  {
    src: "514x514"
  }

];

export default class StudentsAgainst extends Component {
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
          <StyledSection shaded backgroundImage={heroBgLg} paddingTop="6em">
            <H1>{data.students.hero.title}</H1>
            <H3>{data.students.hero.subtitle}</H3>
            <Button>{data.students.hero.buttonText}</Button>
          </StyledSection>
        </Themed>
        <Themed>
          <StyledSection paddingTop="2em" paddingBottom="2em">
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


        <Themed dark >
          <Container background={fromThemeProps("red")}>
            <H1>{data.students.action.title}</H1>
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

          </Container>
        </Themed>
        <Footer />
      </div >
    )
  }
}

