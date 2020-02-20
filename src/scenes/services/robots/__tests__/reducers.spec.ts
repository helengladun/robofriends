import { reducer as robotsReducer } from '../reducers';
import { RobotsTypes } from '../types';

describe('robotsReducer', () => {
  const initialStateRobots = {
    robotsList: [],
    loading: false,
    error: ''
  };

  it('should return the initial state', () => {
    const action = { type: 'INITIAL_STATE' };
    expect(robotsReducer(undefined, action)).toEqual({
      ...initialStateRobots
    });
  });

  it('should handle REQUEST_ROBOTS', () => {
    const action = { type: RobotsTypes.REQUEST_ROBOTS };
    expect(robotsReducer(initialStateRobots, action)).toEqual({
      ...initialStateRobots,
      loading: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const action = {
      type: RobotsTypes.REQUEST_ROBOTS_SUCCESS,
      payload: {
        data: [{
          id: 1,
          name: 'robot 1'
        }]
      }
    };
    expect(robotsReducer(initialStateRobots, action)).toEqual({
      ...initialStateRobots,
      robotsList: action.payload.data
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const action = {
      type: RobotsTypes.REQUEST_ROBOTS_FAILED,
      payload: {
        error: 'Network error'
      }
    };
    expect(robotsReducer(initialStateRobots, action)).toEqual({
      ...initialStateRobots,
      error: action.payload.error
    });
  });
});
