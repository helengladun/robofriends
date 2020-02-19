import React from 'react';

// components
import Card from "../Card/index";

// interfaces
import {IRobot} from '../../../models/IRobot';

interface IProps {
  robots: IRobot[]
}

const CardList = ({robots}: IProps) => (
  <div>
    {robots.map(robot => <Card key={robot.id} data={robot} />)}
  </div>
);

export default React.memo(CardList);
CardList.whyDidYouRender = true;
