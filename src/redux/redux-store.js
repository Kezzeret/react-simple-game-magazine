import {combineReducers, createStore} from "redux";
import newsDataReducer from "./newsData-reducer";
import articlesDataReducer from "./articlesData-reducer";

let reducers = combineReducers({
    newsData: newsDataReducer,
    articlesData: articlesDataReducer
});

let store = createStore(reducers);

export default store;