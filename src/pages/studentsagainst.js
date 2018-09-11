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
import { H1, H2, H3, H4, P, Button } from '../styles/styledComponents/elements';
import data from '../data/data.json';
import emailIcon from '../assets/svg/emailIcon.svg';
import { AboutTHLMarkup } from '../components/Modal/ModalMarkup';

import withPictures from '../components/withPictures/withPictures';

import {
  Container,
  ActionIcon,
  ActionHR,
  ActionFields,
  EmailRecipient,
  EmailSubject,
  EmailBody,
  Button as AltButton
} from '../components/ActionsBar/Action.style';

import "../styles/styles.css";
import { fromThemeProps } from '../helpers/utilities';

class StudentsAgainst extends Component {
  state = {
    emailRecipientValue: data.students.action.emailRecipient,
    emailSubjectValue: data.students.action.emailSubject,
    emailBodyValue: data.students.action.emailBody,
    bricks: null
  }

  componentWillReceiveProps(nextProps) {
    window.dataLayer = window.dataLayer || [];
    const brickOrder = [
      "portrait", "square", "square", "square", "square", "square", "square", "portrait", "square", "portrait", "square", "square"
    ]
    //grabs pictures array of object pulled from S3
    let bricks = nextProps.pictures;

    //adds the brick type to create the masonry
    bricks.map((brick, index) => {
      brick.type = brickOrder[index];
    })

    this.setState({ bricks: bricks })

  }
  render() {

    return (
      <div style={{ background: '#fff' }}>
        <Header header="root" />
        {this.renderHero()}
        {this.renderBlurb()}
        {this.renderMasonry()}
        <a name="join" />
        {this.renderAction()}
        <Footer
          triggerItem={
            <a
              style={{
                textDecoration: 'underline',
                color: '#fff',
                textTransform: 'uppercase'
              }}
            >
              About The Humane League
            </a>
          }
          markupToDisplay={AboutTHLMarkup}
        />
      </div >
    )
  }

  //Partials//

  renderHero() {
    return (
      <Themed dark>
        <StyledSection shaded backgroundImage={heroBgLg} padding="0.5em" paddingTop="6em" paddingBottom="0">
          <H1>{data.students.hero.title}</H1>
          <H3>{data.students.hero.subtitle}</H3>
          <Button href="#join">{data.students.hero.buttonText}</Button>
        </StyledSection>
      </Themed>
    )
  }

  renderBlurb() {
    return (
      <Themed>
        <StyledSection padding="1em" paddingTop="2em" paddingBottom="2em">
          <P>
            {data.students.bodyText[0]}
          </P>
          <H4 weight="bold">
            {data.students.bodyText[1]}
          </H4>
          <P>
            {data.students.bodyText[2]}
          </P>
        </StyledSection>
      </Themed>
    )
  }

  renderMasonry() {
    return (
      <div style={{ paddingTop: '0em', paddingBottom: '2em', margin: '0 auto', width: '95%', maxWidth: '915px' }}>
        {this.state.bricks ?
          <Media query="(max-width: 575px)">
            {matches =>
              matches ? (
                <MasonryMobile bricks={this.state.bricks} />
              ) : (
                  <MasonryDesktop bricks={this.state.bricks} />
                )
            }
          </Media>
          : <div>loading...</div>
        }
      </div>
    )
  }

  renderAction() {
    return (
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
          </ActionFields>
          <AltButton onClick={() => {
            this.handleSubmit()
          }}>{data.students.action.buttonText}</AltButton>
        </Container>
      </Themed>
    )
  }

  //Helpers//

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = () => {
    let body = encodeURIComponent(
      decodeURIComponent(this.state.emailBodyValue)
    );
    window.location.href = `mailto:${
      this.state.emailRecipientValue
      }?subject=${this.state.emailSubjectValue}&body=${body}`;
  }
}

export default withPictures(StudentsAgainst);
