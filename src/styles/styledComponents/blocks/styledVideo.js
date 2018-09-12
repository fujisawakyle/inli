import styled from 'styled-components';
import media from '../../../helpers/media';

const StyledVideo = {};

StyledVideo.Container = styled.div`
    background: #222;
    padding: 2em;
    display: flex;
    align-items: center;
    margin: 0 auto;
    
    max-width: 1100px;

    ${media.sm`
        padding: 5em;
    `}
`

StyledVideo.RespVideo = styled.div`
    
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  max-height: 600px;
  margin-right: -1px; // hack away strange 1px empty space on right of video
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-height: 600px;
  }

`

export default StyledVideo;