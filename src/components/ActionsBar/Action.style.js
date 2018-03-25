import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  background: #ef4446;
  text-align: center;
  height: 580px;
  background: #ef4446;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActionIcon = styled.img`
  height: 60px;
  margin-bottom: 1em;
`;

export const ActionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0 auto;
  /* width: 365px; */

  ${media.sm`
    /* width: 422px; */
    font-size: 1.5rem;
  `};
`;

export const LongActionTitle = styled(ActionTitle)`
  font-size: 1.5rem;
`;

export const ActionHR = styled.hr`
    margin: 0.9rem auto 0.6rem !important;
    border-bottom: 2px solid rgba(255,255,255,0.5);
    max-width: 5em;
    background: none;
`;

export const ActionFields = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const ActionInputLabel = styled.h5`
  margin-bottom: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  padding-top: 1.3em;
  padding-bottom: 6px;
`;

export const ActionInput = styled.input`
  border-radius: 2px;
  padding: .5rem;
  border: none;
  width: 90%;
  max-width: 335px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: .9rem;
  background: rgba(255,255,255,0.3);
  color: #fff;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    border: 1px solid rgba(255,255,255,0.5);
  }
`;
export const ActionTextarea = styled.textarea`
  border-radius: 2px;
  padding: .5rem;
  height: 150px;
  width: 90%;
  max-width: 335px;
  border: none;
  resize: none;
  color: #444343;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: .9rem;
  line-height: 1.3;
  background: rgba(255,255,255,0.3);
  color: #fff;
  border: 1px solid transparent;
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid rgba(255,255,255,0.5);
  }
`;

export const Tweet = styled(ActionTextarea)`
  margin: 1em auto;
`;

export const EmailRecipient = styled(ActionInput)``;
export const EmailSubject = styled(ActionInput)``;

export const EmailBody = styled(ActionTextarea)`
  height: 140px;
  margin-bottom: 1em;
`;

export const FacebookPost = styled(ActionTextarea)`
  margin: 1em auto 0;
`;

export const Button = styled.div`
  background: #fff;
  color: #ef4446;
  box-shadow: 0 4px 5px 3px rgba(0,0,0,0.1);
  border: 2.5px solid white;
  border-radius: 1em;
  padding: 0.4em 0.9em;
  font-family: 'Raleway';
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
  width: auto;
  display: inline-block;
  max-width: 15rem;
  cursor: pointer;
  &:hover,
  &:active {
    background: #eaeaea;
    border-color: #eaeaea;
    color: #ef4446;
    box-shadow: 0 6px 5px 3px rgba(0,0,0,0.1);
  }

  &:active {
    background: #ef4446;
    border-color: #fff;
    color: #fff;
    box-shadow: inset 0 4px 5px 3px rgba(0,0,0,0.1);
  }
`;

export const CopyButton = styled.div`
  display: inline-block;
  position: relative;
  top: -3.7em;
  left: 10em;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  background: #b9b9b9;
  padding: 0em 0.3em;
  border-radius: 6px;
  line-height: 1.9;

  &:hover,
  &:active {
    background: #a7a4a4;
  }

  &.copy-btn--email {
    position: absolute;
    top: auto;
    right: 4.7rem;
    left: auto;

    &Recip {
      top: 3.1rem;
    }

    &Subj {
      bottom: 12.2rem;
    }

    &Body {
      bottom: 1.8rem;
      right: 5.5rem;
    }
  }
`;
