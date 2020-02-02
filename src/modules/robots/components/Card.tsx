import React from 'react'

// interfaces
import { IRobot } from '../../shared/models/IRobot';

interface IProps {
  data: IRobot
}

const Card = ({data: {id, name, email}}: IProps) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default React.memo(Card);