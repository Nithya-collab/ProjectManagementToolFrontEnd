// Redux/Metrics/Reducer.js
import {
  FETCH_METRICS_REQUEST,
  FETCH_METRICS_SUCCESS,
  FETCH_METRICS_FAILURE,
} from "./Action";

const initialState = {
  metrics: null,
  loading: false,
  error: null,
};

export const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_METRICS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_METRICS_SUCCESS:
      return { ...state, loading: false, metrics: action.payload };
    case FETCH_METRICS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default metricsReducer;