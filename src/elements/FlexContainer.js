import styled from 'styled-components';
import media from '../layouts/media';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from './modifierConfig';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    flex-direction: row;
  `};

  ${applyStyleModifiers(modifierConfig)};
`;

FlexContainer.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default FlexContainer;
