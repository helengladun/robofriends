import { AnyAction, Reducer } from "redux";

// types
import { RobotsTypes } from "./types";

// interfaces
import {IRobot} from "../../../interfaces/IRobot";

export interface IRobotsState {
  robotsList: IRobot[],
  loading: boolean,
  error: string
}

const initialState: IRobotsState = {
  robotsList: [],
  loading: false,
  error: ''
};

export const reducer: Reducer<IRobotsState> = (state: IRobotsState = initialState, action: AnyAction) => {
  switch(action.type) {
    case RobotsTypes.GET_ROBOTS_PENDING:
      return {
        ...state,
        loading: true
      };
    case RobotsTypes.GET_ROBOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        robotsList: action.payload.data
      };
    case RobotsTypes.GET_ROBOTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }

};