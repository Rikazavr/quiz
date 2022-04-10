import React from 'react';
import Sound from 'react-sound';

const Audio = ({ url }) => {
  return (
    <Sound
      url={url}
      playStatus={Sound.status.PLAYING}
    />
  )
};

export default Audio;
