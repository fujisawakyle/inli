import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="I'm Not Lovin' It"
      meta={[
        { name: 'description', content: 'Consumers deserve to know where McDonald\'s chicken really comes from.' },
        { name: 'keywords', content: 'McDonalds, chicken, animal welfare, welfare' },
        { name: 'twitter:card', content: 'photo' },
        { name: 'twitter:url', content: 'https://www.imnotlovinit.com' },
        { name: 'twitter:title', content: "I'm Not Lovin' It" },
        { name: 'twitter:description', content: "McDonald's campaign website" },
        {
          name: 'twitter:image',
          content:
            'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-OG-share-image.png'
        }
      ]}
    >

      <meta property="og:title" content="I'm Not Lovin' It" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Consumers deserve to know where McDonald's chicken really comes from." />
      <meta property="og:url" content="https://imnotlovinit.com" />
      <meta property="og:image" content="https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-OG-share-image.png" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900|Source+Sans+Pro:300,400" rel="stylesheet" />
      />
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

// export const query = graphql`
//   query TemplateWrapper {
//     allDataJson {
//       edges {
//         node {
//           navLinkTitles {
//             first
//             second
//             third
//             fourth
//           }
//         }
//       }
//     }
//   }
// `;

export default TemplateWrapper;
