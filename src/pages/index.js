import React from 'react';
import Link from 'gatsby-link';
import ModalTrigger from '../components/Modal/ModalTrigger';
import data from '../data/data.json';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import SadTruthSection from '../components/SadTruthSection/SadTruthSection';
import McNuggetSection from '../components/McNuggetSection/McNuggetSection';
import WhySection from '../components/WhySection/WhySection';
import RonaldSection from '../components/RonaldSection/RonaldSection';
import SocialSection from '../components/SocialSection/SocialSection';
import ActionsBar from '../components/ActionsBar/ActionsBar';
import { RedButton } from '../components/Buttons/Buttons.style';
import sadTruthBgSm from '../assets/images/campaigns-mcdonalds-website-sad-truth-small.jpg';
import sadTruthBgLg from '../assets/images/campaigns-mcdonalds-website-sad-truth-large.jpg';
import companyLogoSm from '../assets/svg/why/company-logos-mobile.svg';
import companyLogoLg from '../assets/svg/why/company-logos-desktop.svg';
import mcNuggetImgSm from '../assets/images/campaigns-mcdonalds-website-chicken-nugget-small.png';
import {
  SadTruthMarkup,
  McNuggetMarkup,
  RonaldMarkup
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
        markupToDisplay={McNuggetMarkup}
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
        background="https://the-humane-league-homepage.s3.amazonaws.com/THL17-comms-share-image.jpg"
        first={data.ronald.first}
        second={data.ronald.second}
        third={data.ronald.third}
      />
      <SocialSection first={data.social.first} />
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
