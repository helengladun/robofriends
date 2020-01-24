import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

export const Spinner = () => (
  <div className="flex justify-center items-center">
    <PacmanLoader
    size={25}
    color={'#F5BD23'}
  /></div>
);