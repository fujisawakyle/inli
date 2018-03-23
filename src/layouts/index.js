import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="I'm Not Lovin' it"
      meta={[
        { name: 'description', content: "I'm not lovin' it website" },
        { name: 'keywords', content: 'sample, something' }
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
