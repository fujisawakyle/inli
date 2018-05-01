import styled from 'styled-components';
import media from '../layouts/media';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from './modifierConfig';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  padding: 0 1em;

  ${media.md`
    flex-direction: row;
  `} ${applyStyleModifiers(modifierConfig)};
`;

Container.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Container;
