import React from 'react';

const Intro = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/watch?v=S_oLr_np4S8&t=2719s`;

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Intro"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Intro;