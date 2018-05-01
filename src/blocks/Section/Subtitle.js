import styled from 'styled-components';
import media from '../../layouts/media';
import { H3 } from '../../elements/H3';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from '../../elements/modifierConfig';

const Subtitle = styled(H3)`
  color: #fff;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding: 0 0.3em;
  line-height: 1.5;

  ${applyStyleModifiers(modifierConfig)};
`;

Subtitle.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Subtitle;
