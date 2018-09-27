import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
import Video from '../components/Video';
import withPictures from '../components/withPictures/withPictures';
import StyledVideo from '../styles/styledComponents/blocks/styledVideo';

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

import { fromThemeProps } from '../helpers/utilities';
import "../styles/scss/burgerStyles.scss";

class StudentsAgainst extends Component {
  state = {
    emailRecipientValue: data.students.action.emailRecipient,
    emailSubjectValue: data.students.action.emailSubject,
    emailBodyValue: data.students.action.emailBody,
    bricks: null
  }

  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
  }

  componentWillReceiveProps(nextProps) {
    //grabs pictures array of object pulled from S3
    let bricks = nextProps.pictures;

    this.setState({ bricks: bricks })

  }
  render() {

    return (
      <div style={{ background: '#fff' }}>
        <Helmet
          title="Students Against McDonald's"
          meta={[
            {
              name: 'description',
              content: "Join thousands of students against McDonald's"
            },
            {
              name: 'keywords',
              content:
                'Students Against McDonalds, McDonalds, chicken, animal welfare, welfare'
            },
            { name: 'twitter:card', content: 'photo' },
            { name: 'twitter:url', content: 'https://studentsagainstmcdonalds.com' },
            { name: 'twitter:title', content: "Students Against McDonald's" },
            {
              name: 'twitter:description',
              content: "Join thousands of students against McDonald's"
            },
            {
              name: 'twitter:image',
              content:
                'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-imnotlovinit-website-students-share.jpg'
            },
            {
              property: 'og:title',
              content: "Students Against McDonald's"
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:description',
              content: "Join thousands of students against McDonald's"
            },
            {
              property: 'og:url',
              content: 'https://studentsagainstmcdonalds.com'
            },
            {
              property: 'og:image',
              content:
                'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-imnotlovinit-website-students-share.jpg'
            }
          ]}
        />
        <Header header="root" />
        {this.renderHero()}
        {this.renderBlurb()}
        {this.renderMasonry()}
        <a name="join" />
        {this.renderAction()}
        <a name="video" />
        {this.renderVideo()}
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
        <StyledSection shaded backgroundImageSm={heroBgSm} backgroundImageLg={heroBgLg} padding="0.5em" paddingTop="6em" paddingBottom="0">
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
        <StyledSection background={fromThemeProps("altRed")}>
          <Container height="max-content" padding="2em 1em">
            <H1>{data.students.action.title}</H1>
            <ActionIcon src={emailIcon} />
            <H2>
              {data.students.action.subtitle}
              <ActionHR />
            </H2>
            <P maxWidth="570px">
              {data.students.action.body}
            </P>
            <ActionFields>
              <P small marginBottom="0" marginTop="1em"> To </P>
              <EmailRecipient
                type="text"
                value={this.state.emailRecipientValue}
                onChange={e => this.handleChange(e, 'emailRecipientValue')}
              />
              <br />
              <P small marginBottom="0" marginTop="1em"> Subject </P>
              <EmailSubject
                type="text"
                value={this.state.emailSubjectValue}
                onChange={e => this.handleChange(e, 'emailSubjectValue')}
              />
              <br />
              <P small marginBottom="0" marginTop="1em"> Message </P>
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
        </ StyledSection>
      </Themed>
    )
  }

  renderVideo() {
    return (
      <div style={{ background: "#222", boxShadow: "-3px -4px 5px 3px #000" }}>
        <StyledVideo.Container>
          <Video videoURL={`https://www.youtube.com/embed/${data.students.video.id}?rel=0&amp;showinfo=0`} />
        </StyledVideo.Container>
        <hr style={{ marginBottom: "2px" }} />
      </div>
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
