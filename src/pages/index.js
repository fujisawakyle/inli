import React from 'react';
import Link from 'gatsby-link';
import ModalTrigger from '../components/Modal/ModalTrigger';
import data from '../data/data.json';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import LearnMoreSection from '../components/LearnMoreSection/LearnMoreSection';
import ActionsBar from '../components/ActionsBar/ActionsBar';

export default () => {
  return (
    <div>
      <HeroVideo videoURL={data.videoURL} />
      <LearnMoreSection
        buttonText={data.buttonText.first}
        text={data.overlayText.first}
        first={data.learnMoreFirst.first}
        second={data.learnMoreFirst.second}
        third={data.learnMoreFirst.third}
        background="https://the-humane-league-homepage.s3.amazonaws.com/THL17-comms-share-image.jpg"
      />
      <ActionsBar />
      <LearnMoreSection
        buttonText={data.buttonText.second}
        text={data.overlayText.second}
        background="https://the-humane-league-share.s3.amazonaws.com/tac-share.png"
        first={data.learnMoreSecond.first}
        second={data.learnMoreSecond.second}
        third={data.learnMoreSecond.third}
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
