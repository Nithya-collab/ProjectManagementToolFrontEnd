// Redux/Metrics/Action.js
import api from "@/config/api";

export const FETCH_METRICS_REQUEST = "FETCH_METRICS_REQUEST";
export const FETCH_METRICS_SUCCESS = "FETCH_METRICS_SUCCESS";
export const FETCH_METRICS_FAILURE = "FETCH_METRICS_FAILURE";

export const fetchMetrics = () => async (dispatch) => {
  dispatch({ type: FETCH_METRICS_REQUEST });
  try {
    const res = await api.get("/api/metrics");
    dispatch({ type: FETCH_METRICS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_METRICS_FAILURE, payload: error });
  }
};

// ✅ New: polling wrapper
export const startMetricsPolling = (intervalMs = 10000) => (dispatch) => {
  dispatch(fetchMetrics()); // initial fetch
  const id = setInterval(() => {
    dispatch(fetchMetrics());
  }, intervalMs);

  // Return a function to stop polling
  return () => clearInterval(id);
};
