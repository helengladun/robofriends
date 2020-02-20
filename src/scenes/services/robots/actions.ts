// types
import { RobotsTypes } from './types';

// interfaces
import { IRobot } from '../../models/IRobot';

export const requestRobots = () => ({
  type: RobotsTypes.REQUEST_ROBOTS
});

export const requestRobotsSuccess = (data: IRobot[]) => ({
  type: RobotsTypes.REQUEST_ROBOTS_SUCCESS,
  payload: {
    data
  }
});

export const requestRobotsFailed = (error: string) => ({
  type: RobotsTypes.REQUEST_ROBOTS_FAILED,
  payload: {
    error
  }
});
