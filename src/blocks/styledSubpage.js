import styled from 'styled-components';
import { RedButton } from '../components/Buttons/Buttons.style';


const StyledSubpage = {};

StyledSubpage.Container = styled.div`
  background-image: radial-gradient(
    rgb(245, 0, 0),
    rgb(230, 0, 0),
    rgb(130, 0, 0)
  );
  background-attachment: fixed;
  color: #fff953;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

StyledSubpage.Logo = styled.div`
  width: 12em;
  margin-bottom: 0.5em;
`;

StyledSubpage.Title = styled.h1`
  margin-bottom: 0.5em;
`;

StyledSubpage.RedButtonWhiteBorder = styled(RedButton)`
  border: 2px solid white;
`;

export default StyledSubpage;