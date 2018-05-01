import styled from 'styled-components';
import media from '../../layouts/media';
import { P } from '../../elements/P';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from '../../elements/modifierConfig';

const Description = styled(P)`
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding: 0 0.3em;

  ${applyStyleModifiers(modifierConfig)};
`;

Description.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Description;
