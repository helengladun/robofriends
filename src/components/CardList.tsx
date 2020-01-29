import React from 'react';

// components
import Card from "./Card";

// interfaces
import {IRobot} from '../interfaces/IRobot'

interface IProps {
  robots: IRobot[]
}

const CardList = ({robots}: IProps) => (
  <div>
    {robots.map(robot => <Card key={robot.id} data={robot} />)}
  </div>
);

export default CardList;
