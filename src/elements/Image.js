import styled from 'styled-components';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from './modifierConfig';

const Image = styled.img`
  margin-bottom: 1.5em;
  width: 100%;

  ${applyStyleModifiers(modifierConfig)};
`;

Image.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Image;
