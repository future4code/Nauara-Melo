import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import trips from './trips'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    trips,
    // Outros reducers aqui
  });
