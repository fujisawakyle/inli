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
        { property: 'og:title', content: "I'm Not Lovin' It" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://imnotlovinit.com' },
        {
          property: 'og:image',
          content:
            'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/toolkit/McD%20ToolKit%20cover.jpg'
        },
        { name: 'twitter:card', content: 'photo' },
        { name: 'twitter:url', content: 'https://www.imnotlovinit.com' },
        { name: 'twitter:title', content: "I'm Not Lovin' It" },
        { name: 'twitter:description', content: "McDonald's campaign website" },
        {
          name: 'twitter:image',
          content:
            'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/toolkit/McD%20ToolKit%20cover.jpg'
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
