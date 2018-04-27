import styled from 'styled-components';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from '../../elements/modifierConfig';
import media from '../../layouts/media';

import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';

const Section = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.md`
    padding: 4rem 0;
  `};

  ${applyStyleModifiers(modifierConfig)};
`;

Section.Title = Title;
Section.Subtitle = Subtitle;
Section.Description = Description;

Section.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Section;
