import React from 'react'

const Spinner = () => (
  <div className="full-screen flex justify-center items-center">
    <div className="pacman">
      <div className="pacman__mouth"></div>
      <div className="pacman__food"></div>
      <div className="pacman__food"></div>
      <div className="pacman__food"></div>
      <div className="pacman__food"></div>
    </div>
  </div>
);

export default React.memo(Spinner)

Spinner.whyDidYouRender = true;