import styled from 'styled-components';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';
import modifierConfig from './modifierConfig';
import { red } from '../assets/styles/colors';

const Button = styled.button`
  border-radius: 1em;
  background: ${red};
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.4em 0.9em;
  border: none;
  font-weight: bold;
  transition: background 0.05s ease;
  cursor: pointer;
  margin-bottom: 1.5em;

  &:hover {
    background: rgb(158, 28, 32);
  }

  ${applyStyleModifiers(modifierConfig)};
`;

Button.propTypes = {
  // Setup validation of the "normal" modifier flags:
  modifiers: styleModifierPropTypes(modifierConfig)
};

export default Button;
