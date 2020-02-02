// types
import { RobotsTypes } from "./types";

//interfaces
import {IRobot} from "../../shared/models/IRobot";

export const getRobotsPending = () => ({
  type: RobotsTypes.GET_ROBOTS_PENDING
});

export const getRobotsSuccess = (data: IRobot[]) => ({
  type: RobotsTypes.GET_ROBOTS_SUCCESS,
  payload: {
    data
  }
});

export const getRobotsFailed = (error: string) => ({
  type: RobotsTypes.GET_ROBOTS_FAILED,
  payload: {
    error
  }
});

