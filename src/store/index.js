import { combineReducers, createStore } from "redux";
import commentReducer from "./comment";

//루트 리듀서
const rootReducer = combineReducers({
  comment: commentReducer,
});

//store
const store = createStore(rootReducer);
export default store;
