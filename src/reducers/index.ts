import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const app = (history: any) =>
  combineReducers({
    router: connectRouter(history)
  });

export default app;
