import React from 'react';
import Link from 'gatsby-link';
import ModalTrigger from '../components/Modal/ModalTrigger';
import Overlay from '../components/Overlay/Overlay';
import data from '../data/data.json';

export default () => {
  return (
    <div>
      <ModalTrigger
        buttonText={data.buttonText.first}
        text={data.overlayText.first}
      />
      <ModalTrigger
        buttonText={data.buttonText.second}
        text={data.overlayText.second}
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
