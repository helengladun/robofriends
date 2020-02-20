import { Robot } from '../../api/Robot';
import { runSaga, Saga } from 'redux-saga';

import { getRobotsSaga, watchGetRobotAsync } from '../saga';
import { requestRobotsFailed, requestRobotsSuccess } from '../actions';
import { takeEvery } from 'redux-saga/effects';
import { RobotsTypes } from '../types';

jest.mock('../../api/Robot');

async function recordSaga(saga: Saga, initialAction: {}) {
  const dispatched: unknown[] = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}

describe('robots saga', () => {
  Robot.getRobot = jest.fn();

  const payload = [
    {
      id: 1,
      name: 'robot 1',
      email: 'robot1@gmail.com'
    }
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('success', async () => {
    (Robot.getRobot as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: payload
      })
    );

    const dispatched = await recordSaga(getRobotsSaga, { payload });

    expect(Robot.getRobot).toHaveBeenCalled();
    expect(dispatched).toContainEqual(requestRobotsSuccess(payload));
  });

  it('failed', async () => {
    const error = { message: 'network error' };

    (Robot.getRobot as jest.Mock).mockImplementation(() => Promise.reject(error));

    const dispatched = await recordSaga(getRobotsSaga, { payload });

    expect(Robot.getRobot).toHaveBeenCalled();
    expect(dispatched).toContainEqual(requestRobotsFailed(error.message));
  });

  it('watcher', () => {
    const watcher = watchGetRobotAsync();
    expect(watcher.next().value).toEqual(takeEvery(RobotsTypes.REQUEST_ROBOTS, getRobotsSaga));
    expect(watcher.next().done).toBe(true);
  });
});
