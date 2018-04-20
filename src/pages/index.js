import React from 'react';
import Link from 'gatsby-link';
import ModalTrigger from '../components/Modal/ModalTrigger';
import data from '../data/data.json';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import SadTruthSection from '../components/SadTruthSection/SadTruthSection';
import ActionsBar from '../components/ActionsBar/ActionsBar';
import McNuggetSection from '../components/McNuggetSection/McNuggetSection';
import WhySection from '../components/WhySection/WhySection';
import RonaldSection from '../components/RonaldSection/RonaldSection';
import SocialSection from '../components/SocialSection/SocialSection';
import MediaSection from '../components/MediaSection/MediaSection.js';
import FooterSection from '../components/FooterSection/FooterSection';
import { RedButton } from '../components/Buttons/Buttons.style';
import sadTruthBgSm from '../assets/images/campaigns-mcdonalds-website-sad-truth-small.jpg';
import sadTruthBgLg from '../assets/images/campaigns-mcdonalds-website-sad-truth-large.jpg';
import companyLogoSm from '../assets/svg/why/company-logos-mobile.svg';
import companyLogoLg from '../assets/svg/why/company-logos-desktop.svg';
import mcNuggetImgSm from '../assets/images/campaigns-mcdonalds-website-chicken-nugget-small.png';

import {
  SadTruthMarkup,
  McNuggetMarkupMobile,
  McNuggetMarkupDesktop,
  RonaldMarkup,
  MediaMarkup,
  AboutTHLMarkup
} from '../components/Modal/ModalMarkup';

export default () => {
  return (
    <div>
      <Header />
      <HeroVideo videoURL={data.videoURL} />
      <a name="sadTruth" />
      <SadTruthSection
        triggerItem={<RedButton>{data.sadTruth.buttonText}</RedButton>}
        markupToDisplay={SadTruthMarkup}
        first={data.sadTruth.first}
        second={data.sadTruth.second}
        third={data.sadTruth.third}
        backgroundSm={sadTruthBgSm}
        backgroundLg={sadTruthBgLg}
      />
      <a name="takeAction" />
      <ActionsBar />
      <a name="mcNugget" />
      <McNuggetSection
        triggerItem={<RedButton>{data.mcNugget.buttonText}</RedButton>}
        markupToDisplay={McNuggetMarkupMobile}
        markupToDisplay2={McNuggetMarkupDesktop}
        imgSm={mcNuggetImgSm}
        first={data.mcNugget.first}
        second={data.mcNugget.second}
        third={data.mcNugget.third}
      />
      <a name="why" />
      <WhySection
        imgSm={companyLogoSm}
        imgLg={companyLogoLg}
        first={data.why.first}
        second={data.why.second}
      />
      <a name="ronald" />
      <RonaldSection
        triggerItem={<RedButton>{data.ronald.buttonText}</RedButton>}
        markupToDisplay={RonaldMarkup}
        first={data.ronald.first}
        second={data.ronald.second}
        third={data.ronald.third}
      />
      <a name="social" />
      <SocialSection first={data.social.first} />
      <a name="media" />
      <MediaSection
        triggerItem={<RedButton>{data.media.buttonText}</RedButton>}
        markupToDisplay={MediaMarkup}
        first={data.media.first}
      />
      <FooterSection
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
    </div>
  );
};

// export const IndexPage = ({ data }) => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// );
