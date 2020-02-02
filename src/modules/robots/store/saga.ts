import { takeEvery, call, all, put } from 'redux-saga/effects'

// actions
import {requestRobotsSuccess, requestRobotsFailed} from "./actions";

// services
import {Robot} from '../../shared/services/Robot';

// types
import {RobotsTypes} from "./types";

export function* getRobotsSaga() {
  try {
    const response = yield call(Robot.getRobot);
    yield put(requestRobotsSuccess(response.data));
  } catch (e) {
    yield put(requestRobotsFailed(e.message));
  }
}

function* watchGetRobotAsync() {
  yield takeEvery(RobotsTypes.REQUEST_ROBOTS, getRobotsSaga)
}

export default function* rootSaga() {
  yield all([
    watchGetRobotAsync()
  ])
}