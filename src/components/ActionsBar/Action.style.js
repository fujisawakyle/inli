import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  height: 660px;
  background: #ef4446;
  text-align: center;
`;

export const ActionIcon = styled.img`
  height: 60px;
  margin-bottom: 1em;
`;

export const ActionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  margin: 0 auto;
  width: 365px;

  ${media.sm`
    width: 422px;
  `};
`;

export const LongActionTitle = styled(ActionTitle)`
  font-size: 1.5rem;
`;

export const ActionHR = styled.hr`
  margin: 1rem auto;
  border-bottom: 2.5px solid white;
  width: 60%;
`;

export const ActionFields = styled.div`
  width: 80%;
  margin: 0 auto;
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
  padding: 0.6em 0 0.6em 0.3em;
  border: none;
  width: 90%;
  max-width: 335px;
`;
export const ActionTextarea = styled.textarea`
  border-radius: 2px;
  padding: 0.2em 0.6em;
  height: 250px;
  width: 90%;
  max-width: 335px;
  border: none;
  resize: none;
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
  margin: 1em auto;
`;

export const Button = styled.div`
  background: #ef4446;
  border: 2.5px solid white;
  border-radius: 1em;
  padding: 0.4em 0.9em;
  font-family: 'Raleway';
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
  width: 9em;
  cursor: pointer;
`;

export const CopyButton = styled(Button)`
  width: 5em;
`;
