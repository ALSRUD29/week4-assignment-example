import { combineReducers, createStore } from "redux";
import commentReducer from "./comment";
import paginationReducer from "./pagination";

//루트 리듀서
const rootReducer = combineReducers({
  comment: commentReducer,
  pagination: paginationReducer,
});

//store
const store = createStore(rootReducer);
export default store;
