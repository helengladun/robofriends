import React from 'react';

// components
import Card from "./Card";

// interfaces
import {IRobot} from '../../shared/models/IRobot'

interface IProps {
  robots: IRobot[]
}

const CardList = ({robots}: IProps) => (
  <div>
    {console.log('cardlist')}
    {robots.map(robot => <Card key={robot.id} data={robot} />)}
  </div>
);

export default CardList;
CardList.whyDidYouRender = true;