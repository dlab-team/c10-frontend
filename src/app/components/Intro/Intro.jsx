import React from "react"

const Intro = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/z5NPi7WrViU`;

  return (
    <div className="w-556 h-340">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Intro"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Intro
