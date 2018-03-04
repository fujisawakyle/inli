import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import data from '../data/data.json';
import Header from '../components/Header/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header navLinks={data.navLinkTitles} />
    {console.log(data.navLinkTitles)}
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
