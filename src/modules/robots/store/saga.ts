import { takeEvery, call, all, put } from 'redux-saga/effects'

// actions
import {getRobotsSuccess, getRobotsFailed} from "./actions";

// services
import {Robot} from '../../shared/services/Robot';

// types
import {RobotsTypes} from "./types";

export function* getRobotsSaga() {
  try {
    const response = yield call(Robot.getRobot);
    yield put(getRobotsSuccess(response.data));
  } catch (e) {
    yield put(getRobotsFailed(e.message));
  }
}

function* watchGetRobotAsync() {
  yield takeEvery(RobotsTypes.GET_ROBOTS_PENDING, getRobotsSaga)
}

export default function* rootSaga() {
  yield all([
    watchGetRobotAsync()
  ])
}