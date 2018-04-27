import { red, lightRed, white, black } from '../assets/styles/colors';

import media, { md } from '../layouts/media';

import boycottBgImg from '../assets/images/franchise/campaigns-mcdonald-national-boycott-large.jpg';
import misleadingBgImg from '../assets/images/franchise/campaigns-mcdonald-misleading-consumers-large.jpg';

const modifierConfig = {
  //Colors
  redBg: () => `
    background: ${red};
  `,
  lightRedFont: () => `
    color: ${lightRed};
  `,
  darkFont: () => `
    color: ${black};
  `,

  //Typography
  uppercase: () => `
    text-transform: uppercase;
  `,
  textLeft: () => `
    text-align: left;
  `,

  //Section
  headerPadding: () => `
    padding-top: 5.5em;

    @media (min-width: ${md}) {
      padding-top: 6.5em;
    }
  `,
  smallPadding: () => `
    @media (min-width: ${md}) {
      padding: 2rem 0;
    }
  `,
  boycottBg: () => `
    background: url(${boycottBgImg});
    background-size: cover;
    background-position: center;
  `,
  misleadingBg: () => `
    background: url(${misleadingBgImg});
    background-size: cover;
    background-position: 75% bottom; 
  `,

  //Container
  column: () => `
    @media (min-width: ${md}) {
      flex-direction: column;
    }
  `,
  dipytch: () => `
    @media (min-width: ${md}) {
      width: 50%;
    }
  `,
  alignLeft: () => `
    @media (min-width: ${md}) {
      align-items: flex-start;
    }
  `,
  padding: () => `
    @media (min-width: ${md}) {
      padding: .5em;
    }
  `,
  narrow: () => `
    max-width: 800px;
  `,
  narrower: () => `
    max-width: 500px;
  `,

  //Franchising section
  unhappyContainer: () => `
    @media (min-width: ${md}) {
      align-items: flex-start;
    }
  `,
  unhappyText: () => `
    @media (min-width: ${md}) {
      width: 60%;
    }
  `,
  unhappyImg: () => `
    order: 0;
    width: 80%;
    max-width: 15em;
  @media (min-width: ${md}) {
    width: 50%;
    max-width: 20em;
    order: 3;
    position: absolute;
    right: -1em;
    top: 50%;
    transform: translateY(-50%);
  }
  `
};

export default modifierConfig;
