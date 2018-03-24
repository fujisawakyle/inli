import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="I'm Not Lovin' It"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'og:title', content: "I'm Not Lovin' It" },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://imnotlovinit.com' },
        {
          name: 'og:image',
          content:
            'https://s3.amazonaws.com/the-humane-league-homepage/THL17-comms-share-image.jpg'
        }
      ]}
    />
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
