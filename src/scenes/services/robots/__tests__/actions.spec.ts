import * as actions from '../actions';
import { RobotsTypes } from '../types';

describe('robots actions', () => {
  it('requestRobots', () => {
    const expectedAction = {
      type: RobotsTypes.REQUEST_ROBOTS
    };
    expect(actions.requestRobots()).toEqual(expectedAction);
  });

  it('requestRobotsSuccess', () => {
    const data = [
      {
        id: 1,
        name: 'robot 1',
        email: 'robot@gmail.com'
      }
    ];

    const expectedAction = {
      type: RobotsTypes.REQUEST_ROBOTS_SUCCESS,
      payload: { data }
    };
    expect(actions.requestRobotsSuccess(data)).toEqual(expectedAction);
  });

  it('requestRobotsFailed', () => {
    const error = 'Network Error';
    const expectedAction = {
      type: RobotsTypes.REQUEST_ROBOTS_FAILED,
      payload: { error }
    };
    expect(actions.requestRobotsFailed(error)).toEqual(expectedAction);
  });
});
