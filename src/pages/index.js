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
import MediaSection from '../components/MediaSection/MediaSection';
import FranchiseeSection from '../components/FranchiseeSection/FranchiseeSection';
import FooterSection from '../components/FooterSection/FooterSection';
import { RedButton } from '../components/Buttons/Buttons.style';
import sadTruthBgSm from '../assets/images/campaigns-mcdonalds-website-sad-truth-small.jpg';
import sadTruthBgLg from '../assets/images/campaigns-mcdonalds-website-sad-truth-large.jpg';
import companyLogoSm from '../assets/svg/why/company-logos-mobile.svg';
import companyLogoLg from '../assets/svg/why/company-logos-desktop.svg';
import mcNuggetImgSm from '../assets/images/campaigns-mcdonalds-website-chicken-nugget-small.png';
import { NAVANCHOR } from '../styles/styledComponents/elements';

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
      <Header header="root" />
      <HeroVideo videoURL={data.videoURL} />
      <NAVANCHOR name="sadTruth" />
      <SadTruthSection
        eventName="sadTruth"
        triggerItem={<RedButton>{data.sadTruth.buttonText}</RedButton>}
        markupToDisplay={SadTruthMarkup}
        first={data.sadTruth.first}
        second={data.sadTruth.second}
        third={data.sadTruth.third}
        backgroundSm={sadTruthBgSm}
        backgroundLg={sadTruthBgLg}
      />
      <NAVANCHOR name="takeAction" />
      <ActionsBar />
      <NAVANCHOR name="mcNugget" />
      <McNuggetSection
        eventName="mcNugget"
        triggerItem={<RedButton>{data.mcNugget.buttonText}</RedButton>}
        markupToDisplay={McNuggetMarkupMobile}
        markupToDisplay2={McNuggetMarkupDesktop}
        imgSm={mcNuggetImgSm}
        first={data.mcNugget.first}
        second={data.mcNugget.second}
        third={data.mcNugget.third}
      />
      <NAVANCHOR name="why" />
      <WhySection
        imgSm={companyLogoSm}
        imgLg={companyLogoLg}
        first={data.why.first}
        second={data.why.second}
      />
      <NAVANCHOR name="ronald" />
      <RonaldSection
        eventName="ronald"
        triggerItem={<RedButton>{data.ronald.buttonText}</RedButton>}
        markupToDisplay={RonaldMarkup}
        first={data.ronald.first}
        second={data.ronald.second}
        third={data.ronald.third}
      />
      <NAVANCHOR name="social" />
      <SocialSection first={data.social.first} />
      <NAVANCHOR name="media" />
      <MediaSection
        eventName="media"
        triggerItem={<RedButton>{data.media.buttonText}</RedButton>}
        markupToDisplay={MediaMarkup}
        first={data.media.first}
      />
      <NAVANCHOR name="franchisee" />
      <FranchiseeSection />
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
