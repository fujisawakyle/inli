import React from 'react';
import Link from 'gatsby-link';
import ModalTrigger from '../components/Modal/ModalTrigger';
import data from '../data/data.json';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import SadTruthSection from '../components/SadTruthSection/SadTruthSection';
import McNuggetSection from '../components/McNuggetSection/McNuggetSection';
import RonaldSection from '../components/RonaldSection/RonaldSection';
import ActionsBar from '../components/ActionsBar/ActionsBar';
import { RedButton } from '../components/Buttons/Buttons.style';
import {
  SadTruthMarkup,
  McNuggetMarkup,
  RonaldMarkup
} from '../components/Modal/ModalMarkup';

export default () => {
  return (
    <div>
      <HeroVideo videoURL={data.videoURL} />
      <a name="sadTruth" />
      <SadTruthSection
        triggerItem={<RedButton>{data.sadTruth.buttonText}</RedButton>}
        markupToDisplay={SadTruthMarkup}
        first={data.sadTruth.first}
        second={data.sadTruth.second}
        third={data.sadTruth.third}
        background="https://the-humane-league-homepage.s3.amazonaws.com/THL17-comms-share-image.jpg"
      />
      <a name="takeAction" />
      <ActionsBar />
      <a name="mcNugget" />
      <McNuggetSection
        triggerItem={<RedButton>{data.mcNugget.buttonText}</RedButton>}
        markupToDisplay={McNuggetMarkup}
        background="https://the-humane-league-share.s3.amazonaws.com/tac-share.png"
        first={data.mcNugget.first}
        second={data.mcNugget.second}
        third={data.mcNugget.third}
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
