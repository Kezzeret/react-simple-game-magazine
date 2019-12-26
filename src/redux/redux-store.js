import {combineReducers, createStore} from "redux";
import newsDataReducer from "./newsData-reducer";
import articlesDataReducer from "./articlesData-reducer";
import interviewDataReducer from "./interviewData-reducer";

let reducers = combineReducers({
    newsData: newsDataReducer,
    articlesData: articlesDataReducer,
    interviewData: interviewDataReducer
});

let store = createStore(reducers);

export default store;