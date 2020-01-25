import React from 'react'

export const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="pacman">
      <div className="pacman__mouth"></div>
      <div className="pacman__food pacman__first-food"></div>
      <div className="pacman__food pacman__second-food"></div>
      <div className="pacman__food pacman__third-food"></div>
      <div className="pacman__food pacman__last-food"></div>
    </div>
  </div>
);