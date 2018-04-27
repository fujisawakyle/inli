import styled from 'styled-components';
import media from '../../layouts/media';
import { H1 } from '../../elements/H1';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from '../../elements/modifierConfig';

const Title = styled(H1)`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  z-index: 1;
  margin-bottom: 1.5rem;
  padding: 0 0.3em;

  ${media.md`
    font-size: 3.1rem;
    max-width: none;
  `};
  ${applyStyleModifiers(modifierConfig)};
`;

Title.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Title;
